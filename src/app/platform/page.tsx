import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import MediaHero from '@/components/media-translation/media-hero';

export default function Home() {
  return (
    <main className="w-full h-full max-w-[1720px] mx-auto px-4 py-4 lg:px-12 lg:py-12">
      <Tabs defaultValue="media" className="w-full">
        <TabsList className="mb-8 w-full max-w-[500px] rounded-full p-2 h-full mx-auto bg-[#FFFFFF]/5 border border-[#FFFFFF]/5 grid grid-cols-2">
          <TabsTrigger value="media" className='text-lg rounded-full h-full text-white py-3 px-4 data-[state=active]:text-[#2C2C2C]'>Media Translation</TabsTrigger>
          <TabsTrigger value="document" className='text-lg rounded-full h-full text-white p-4 data-[state=active]:text-[#2C2C2C]'>Document Translation</TabsTrigger>
        </TabsList>
        <TabsContent value="media">
          <MediaHero />
        </TabsContent>
        <TabsContent value="document">
          
        </TabsContent>
      </Tabs>
    </main>
  );
}
