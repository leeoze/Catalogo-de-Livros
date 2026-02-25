import type { Book } from '../types/Book';
import { BookItem } from './BookItem';

interface BookListProps {
  books: Book[];
  onRemove: (id: string) => void;
}

export function BookList({ books, onRemove }: BookListProps) {
  return (
    <ul className="book-list">
      {books.map((book) => (
        <BookItem
          key={book._id}
          book={book}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}
export default BookList;