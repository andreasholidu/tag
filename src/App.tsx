import Tag from './Tag';

function App() {
  return (
    <div className="App container mx-auto px-4">
      <div className='h-[100vh] flex items-center justify-center m-auto'>
      <div className='flex flex-col shadow-xl md:p-12 p-8 rounded-3xl gap-3 lg:w-1/2 w-full'>
        <span className='text-2xl font-semibold'>Tag</span>
        <span className='text-lg text-gray-600'>It's just a tag.</span>
        <div className='flex flex-col sm:flex-row gap-3 mt-4'>
          <div className="relative">
            <div className="relative h-[260px] w-full overflow-hidden rounded-3xl lg:h-auto lg:pt-full" >
              <picture className="absolute left-0 top-0 h-full w-full rounded-3xl" >
                <img alt="Ferienhaus für 4 Personen" className="h-full w-full object-cover rounded-3xl" loading="lazy" src="https://cataas.com/cat?width=500&height=500" style={{ boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.40), 0 0 0 1px rgba(0, 0, 0, 0.10)' }} />
              </picture>
            </div>
            <Tag tagText="Haustiere erlaubt"></Tag>

                    
            <div className="flex flex-col gap-[10px]">
              <div className="mt-2 flex flex-col items-start gap-1">
                <div className="flex w-full items-center justify-between">
                  <p className="m-0 line-clamp-1 overflow-hidden text-ellipsis text-sm text-grey-700" title="Kerteminde Und Umgebung, Dänemark">Kerteminde Und Umgebung, Dänemark</p>
                </div>
                <h3 className="m-0 line-clamp-2 overflow-hidden text-ellipsis text-sm font-semibold text-black-ultra group-hover:underline" title="Ferienhaus für 4 Personen">Ferienhaus für 4 Personen</h3>
                <p className="m-0 text-sm font-semibold text-green-500">Kostenlose Stornierung</p>
              </div>
              
              <div className="flex flex-wrap gap-1 text-sm">
                <span className="text-grey-700">ab</span> <span className="font-semibold text-black-ultra">50&nbsp;€</span> <span className="text-grey-700">pro Nacht</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      </div>
    </div>
  );
}

export default App;