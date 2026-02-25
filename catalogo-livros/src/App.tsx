import { useEffect, useState } from 'react';
import { api } from './assets/services/api';
import type { Book } from './assets/types/Book';
import { BookForm } from './assets/components/BookForm';
import { BookList } from './assets/components/BookList';

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  async function loadBooks() {
    try {
      const response = await api.get<Book[]>('');
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function addBook(book: Book) {
    try {
      const response = await api.post<Book>('', book);
      setBooks((prev) => [...prev, response.data]);
    } catch (error) {
      console.error(error);
    }
  }

  async function removeBook(id: string) {
    try {
      await api.delete(`/${id}`);
      setBooks((prev) => prev.filter((book) => book._id !== id));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    (async () => {
      await loadBooks();
    })();
  }, []);

  return (
    <div className="app-container">
      <h1>Catálogo de Livros</h1>
      <BookForm onAdd={addBook} />
      <BookList books={books} onRemove={removeBook} />
    </div>
  );
}

export default App;