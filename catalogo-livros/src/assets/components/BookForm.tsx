import { useState } from 'react';
import type { FormEvent } from 'react';
import type { Book } from '../types/Book';

interface BookFormProps {
  onAdd: (book: Book) => void;
}

export function BookForm({ onAdd }: BookFormProps) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [status, setStatus] = useState<Book['status']>('Não lido');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAdd({ title, author, status });

    setTitle('');
    setAuthor('');
    setStatus('Não lido');
  }

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <input
        placeholder="Título do livro"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <input
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />

      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value as Book['status'])
        }
      >
        <option value="Não lido">Não lido</option>
        <option value="Lido">Lido</option>
      </select>

      <button type="submit">Adicionar Livro</button>
    </form>
  );
}
export default BookForm;
