import { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, X, Check } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  ingredients: string;
  health_benefits: string;
  nutrition_facts: string;
}

const ManageProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: '',
    description: '',
    image: '',
    ingredients: '',
    health_benefits: '',
    nutrition_facts: ''
  });

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost/website/Nutriscoop/api/manage_products.php');
      if (!response.ok) throw new Error('Failed to fetch products');
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
  };

  const handleUpdate = async (updatedProduct: Product) => {
    try {
      const response = await fetch('http://localhost/website/Nutriscoop/api/manage_products.php', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProduct)
      });
      if (!response.ok) throw new Error('Failed to update product');
      setEditingProduct(null);
      fetchProducts();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update product');
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost/website/Nutriscoop/api/manage_products.php?id=${id}`, {
        method: 'DELETE'
      });
      if (!response.ok) throw new Error('Failed to delete product');
      fetchProducts();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete product');
    }
  };

  const handleAdd = async () => {
    try {
      const response = await fetch('http://localhost/website/Nutriscoop/api/manage_products.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct)
      });
      if (!response.ok) throw new Error('Failed to add product');
      setShowAddForm(false);
      setNewProduct({
        name: '',
        description: '',
        image: '',
        ingredients: '',
        health_benefits: '',
        nutrition_facts: ''
      });
      fetchProducts();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add product');
    }
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;
  if (error) return <div className="p-8 text-center text-red-600">{error}</div>;

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Manage Products</h1>
        <button
          onClick={() => setShowAddForm(true)}
          className="bg-nutri-green text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-nutri-green/90"
        >
          <Plus size={20} />
          Add New Product
        </button>
      </div>

      {showAddForm && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newProduct.image}
              onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
              className="p-2 border rounded"
            />
            <textarea
              placeholder="Description"
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
              className="p-2 border rounded md:col-span-2"
            />
            <textarea
              placeholder="Ingredients"
              value={newProduct.ingredients}
              onChange={(e) => setNewProduct({ ...newProduct, ingredients: e.target.value })}
              className="p-2 border rounded"
            />
            <textarea
              placeholder="Health Benefits"
              value={newProduct.health_benefits}
              onChange={(e) => setNewProduct({ ...newProduct, health_benefits: e.target.value })}
              className="p-2 border rounded"
            />
            <textarea
              placeholder="Nutrition Facts"
              value={newProduct.nutrition_facts}
              onChange={(e) => setNewProduct({ ...newProduct, nutrition_facts: e.target.value })}
              className="p-2 border rounded"
            />
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2 border rounded hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={handleAdd}
              className="bg-nutri-green text-white px-4 py-2 rounded hover:bg-nutri-green/90"
            >
              Add Product
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              {editingProduct?.id === product.id ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    value={editingProduct.name}
                    onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                    className="w-full p-2 border rounded"
                  />
                  <textarea
                    value={editingProduct.description}
                    onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="text"
                    value={editingProduct.image}
                    onChange={(e) => setEditingProduct({ ...editingProduct, image: e.target.value })}
                    className="w-full p-2 border rounded"
                  />
                  <textarea
                    value={editingProduct.ingredients}
                    onChange={(e) => setEditingProduct({ ...editingProduct, ingredients: e.target.value })}
                    className="w-full p-2 border rounded"
                  />
                  <textarea
                    value={editingProduct.health_benefits}
                    onChange={(e) => setEditingProduct({ ...editingProduct, health_benefits: e.target.value })}
                    className="w-full p-2 border rounded"
                  />
                  <textarea
                    value={editingProduct.nutrition_facts}
                    onChange={(e) => setEditingProduct({ ...editingProduct, nutrition_facts: e.target.value })}
                    className="w-full p-2 border rounded"
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => setEditingProduct(null)}
                      className="p-2 text-gray-500 hover:text-gray-700"
                    >
                      <X size={20} />
                    </button>
                    <button
                      onClick={() => handleUpdate(editingProduct)}
                      className="p-2 text-nutri-green hover:text-nutri-green/80"
                    >
                      <Check size={20} />
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="p-2 text-nutri-green hover:text-nutri-green/80"
                    >
                      <Edit2 size={20} />
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="p-2 text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProducts; 