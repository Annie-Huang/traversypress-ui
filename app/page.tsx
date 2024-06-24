import { Button } from '@/components/ui/button';
import DashboardCard from '@/components/dashboard/DashboardCard';

/*
  <Button variant='destructive' size='lg' className='text-blue-400'>
    Click me
  </Button>
*/
export default function Home() {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between gap-5 mb-5'>
        <DashboardCard />
      </div>
    </>
  );
}
