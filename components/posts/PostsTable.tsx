import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from '@/components/ui/table';
import Link from 'next/link';
import posts from '@/data/posts';
import { Post } from '@/types/posts';

interface PostsTableProps {
  limit?: number;
  title?: string;
}

// const PostsTable = () => {
const PostsTable = ({ limit, title }: PostsTableProps) => {
  return <div>Posts</div>;
};

export default PostsTable;
