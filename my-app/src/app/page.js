import Image from 'next/image'
import PieChart from '@/components/PieChart';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import Page from '@/app/dashboard/page';


export default function Home() {
  const data = [
    {name: "mark", value: 150},
    {name: "jeff", value: 200},
    {name: "larry", value: 100},
    {name: "perry", value: 230},
  ];
  return (
     
    <main className="flex">
	<Sidebar />
		<div className="flex min-h-screen flex-col items-center justify-between ">
		  <div className="z-10 max-w-5xl text-center w-full items-center justify-between font-mono text-sm lg:flex">
					<Page />
				</div>
			  <Footer />
		  </div>
    </main>
  )
}
