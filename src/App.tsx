import OpenModalButton from './OpenModalButton';

function App() {
  return (
    <div className="App h-[100vh] flex items-center justify-center m-auto p-6">
      <div className='flex flex-col sm:flex-row shadow p-12 rounded-3xl gap-3 w-full items-center justify-center'>
        <OpenModalButton
          buttonText="Modal 1"
          titleText="First Modal"
          modalCTAButtonText="Save and close"
          modalContent='<p>Hello this is the first modal content.</p>'
          showOptionalButton={true}
          optionalButtonText="Skip"
          optionalButtonAction={() => alert('First Action Clicked')}
        />

        <OpenModalButton
          buttonText="Modal 2"
          modalCTAButtonText="Close"
          titleText="Second Modal"
          modalContent='<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   

          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   
          
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.   
          
          Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.   
          
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.   
          
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur</p>'
          showOptionalButton={false}
        />

        <OpenModalButton
          buttonText="Modal 3"
          modalCTAButtonText="Apply filters"
          titleText="Filters"
          modalContent='<div class="relative flex flex-col text-gray-700 -m-3">
          <nav class="flex min-w-[240px] flex-col gap-1 font-sans text-base font-normal text-blue-gray-700">
            <div role="button"
              class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
              <label htmlFor="vertical-list-react" class="flex items-center w-full px-3 py-2 cursor-pointer">
                <div class="grid mr-3 place-items-center">
                  <div class="inline-flex items-center">
                    <label class="relative flex items-center p-0 rounded-full cursor-pointer" htmlFor="vertical-list-react">
                      <input id="vertical-list-react" type="checkbox"
                        class="before:content peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0" />
                      <span
                        class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                          stroke="currentColor" stroke-width="1">
                          <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </span>
                    </label>
                  </div>
                </div>
                <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                  Pets allowed
                </p>
              </label>
            </div>
            
            <div role="button"
            class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            <label htmlFor="vertical-list-react" class="flex items-center w-full px-3 py-2 cursor-pointer">
              <div class="grid mr-3 place-items-center">
                <div class="inline-flex items-center">
                  <label class="relative flex items-center p-0 rounded-full cursor-pointer" htmlFor="vertical-list-react">
                    <input id="vertical-list-react" type="checkbox"
                      class="before:content peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0" />
                    <span
                      class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                </div>
              </div>
              <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                Holiday home
              </p>
            </label>
          </div>

          <div role="button"
            class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            <label htmlFor="vertical-list-react" class="flex items-center w-full px-3 py-2 cursor-pointer">
              <div class="grid mr-3 place-items-center">
                <div class="inline-flex items-center">
                  <label class="relative flex items-center p-0 rounded-full cursor-pointer" htmlFor="vertical-list-react">
                    <input id="vertical-list-react" type="checkbox"
                      class="before:content peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0" />
                    <span
                      class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                </div>
              </div>
              <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                WiFi
              </p>
            </label>
          </div>

          <div role="button"
            class="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-100 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            <label htmlFor="vertical-list-react" class="flex items-center w-full px-3 py-2 cursor-pointer">
              <div class="grid mr-3 place-items-center">
                <div class="inline-flex items-center">
                  <label class="relative flex items-center p-0 rounded-full cursor-pointer" htmlFor="vertical-list-react">
                    <input id="vertical-list-react" type="checkbox"
                      class="before:content peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-300 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-0" />
                    <span
                      class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </span>
                  </label>
                </div>
              </div>
              <p class="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                Balcony/Terrace 
              </p>
            </label>
          </div>
          </nav>
        </div>'
          showOptionalButton={true}
          optionalButtonText="Cool"
          optionalButtonAction={() => alert('Third Action Clicked')}
        />
      </div>
    </div>
  );
}

export default App;