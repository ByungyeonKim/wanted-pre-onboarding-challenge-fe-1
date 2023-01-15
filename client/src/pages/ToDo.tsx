import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const ToDo = () => {
  return (
    <div className='md:bg-green-800/90 md:flex h-full w-full justify-center items-center'>
      <div className='md:flex md:px-7 max-w-6xl md:max-lg:max-h-[648px] lg:max-h-[762px] mx-auto h-full'>
        <div className='md:bg-gray-100 md:flex-1 flex flex-col h-full'>
          <Header />
          <main className='flex flex-col bg-gray-100 flex-1'>
            <div className='md:hidden flex justify-center items-center h-[220px] overflow-hidden bg-[#f6dbc4]'>
              <img
                className={'animate-fade-in-image opacity-0 object-cover object-center'}
                src='img/camping.png'
                alt='캠핑'
              />
            </div>
            <section className='md:h-full flex-1 w-full max-w-md mx-auto flex flex-col justify-center px-4 py-7 pb-0'>
              <h2 className='font-semibold text-lg text-emerald-900'>일정관리를 도와드릴게요.</h2>
              <div className='flex flex-col justify-between flex-1'>
                <div className='flex-1 my-2 rounded-md shadow bg-white px-2 pt-2'>
                  <p className='mb-1 text-sm text-emerald-700/80'>Tasks</p>
                  <ul className='h-[90%] overflow-y-auto'>
                    <li className='last:mb-0 mb-1 flex justify-between items-center border-b pb-1 border-gray-400/50'>
                      <p className='flex items-center gap-1'>
                        <svg
                          width='21px'
                          height='21px'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'>
                          <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                          <g
                            id='SVGRepo_tracerCarrier'
                            strokeLinecap='round'
                            strokeLinejoin='round'></g>
                          <g id='SVGRepo_iconCarrier'>
                            <path
                              d='M7.5 12L10.5 15L16.5 9M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z'
                              stroke='#9CA3AF'
                              strokeWidth='2'
                              strokeLinecap='round'
                              strokeLinejoin='round'></path>
                          </g>
                        </svg>
                        김치볶음밥 먹기
                      </p>
                      <svg
                        width='21px'
                        height='21px'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                        <g
                          id='SVGRepo_tracerCarrier'
                          strokeLinecap='round'
                          strokeLinejoin='round'></g>
                        <g id='SVGRepo_iconCarrier'>
                          <path
                            d='M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16'
                            stroke='#9CA3AF'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'></path>
                        </g>
                      </svg>
                    </li>
                  </ul>
                </div>
                <div className='w-full flex flex-col gap-4 mx-auto mb-0 max-w-md'>
                  <div className='flex gap-4'>
                    <label htmlFor='password' className='sr-only'>
                      할 일 목록 입력폼
                    </label>
                    <div className='flex-1'>
                      <input
                        type='text'
                        className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
                        placeholder='Enter To Do'
                      />
                    </div>
                    <button
                      type='button'
                      className='flex items-center justify-between rounded-lg bg-cyan-800 px-5 py-3 text-sm font-medium text-white'>
                      Add
                      <svg
                        width='16px'
                        height='16px'
                        viewBox='0 0 16 16'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='#000000'>
                        <g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
                        <g
                          id='SVGRepo_tracerCarrier'
                          strokeLinecap='round'
                          strokeLinejoin='round'></g>
                        <g id='SVGRepo_iconCarrier'>
                          <path
                            fill='#fff'
                            d='M7,2 C7.55228,2 8,2.44772 8,3 C8,3.55228 7.55228,4 7,4 L4,4 L4,12 L12,12 L12,9 C12,8.44771 12.4477,8 13,8 C13.5523,8 14,8.44771 14,9 L14,12 C14,13.1046 13.1046,14 12,14 L4,14 C2.89543,14 2,13.1046 2,12 L2,4 C2,2.89543 2.89543,2 4,2 L7,2 Z M13,0 C13.5523,0 14,0.447715 14,1 L14,2 L15,2 C15.5523,2 16,2.44772 16,3 C16,3.55228 15.5523,4 15,4 L14,4 L14,5 C14,5.55228 13.5523,6 13,6 C12.4477,6 12,5.55228 12,5 L12,4 L11,4 C10.4477,4 10,3.55228 10,3 C10,2.44772 10.4477,2 11,2 L12,2 L12,1 C12,0.447715 12.4477,0 13,0 Z'></path>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
        <div className='md:flex flex-1 justify-center items-center hidden overflow-hidden bg-[#f6dbc4]'>
          <img
            className='animate-fade-in-image opacity-0 object-cover object-center'
            src='img/camping.png'
            alt='캠핑'
          />
        </div>
      </div>
    </div>
  );
};
