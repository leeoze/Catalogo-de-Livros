import type { Book } from '../types/Book';

interface BookItemProps {
  book: Book;
  onRemove: (id: string) => void;
}

export function BookItem({ book, onRemove }: BookItemProps) {
  return (
    <li className="book-item">
      <div className="book-info">
        <strong>{book.title}</strong>
        <span>{book.author}</span>
        <small>{book.status}</small>
      </div>

      <button onClick={() => book._id && onRemove(book._id)}>
        Remover
      </button>
    </li>
  );
}
export default BookItem;