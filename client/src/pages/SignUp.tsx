import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const SignUp = () => {
  return (
    <div className='md:bg-green-800/90 md:flex h-full w-full justify-center items-center'>
      <div className='md:flex md:px-7 max-w-6xl md:max-lg:max-h-[648px] lg:max-h-[762px] mx-auto h-full'>
        <div className='md:bg-gray-100 md:flex-1 flex flex-col h-full'>
          <Header />
          <main className='bg-gray-100 flex-1'>
            <div className='md:hidden flex justify-center items-center h-[220px] overflow-hidden bg-[#f6dbc4]'>
              <img
                className={'animate-fade-in-image opacity-0 object-cover object-center'}
                src='img/camping.png'
                alt='캠핑'
              />
            </div>
            <section className='md:h-full max-w-md mx-auto flex flex-col justify-center px-4 py-7 pb-0'>
              <h2 className='font-semibold text-lg text-emerald-900'>회원가입을 도와드릴게요.</h2>
              <p className='font-normal mt-2 text-emerald-600'>
                회원가입을 위해 이메일과 비밀번호를 입력해주세요.
              </p>
              <div>
                <form className='flex flex-col gap-4 mx-auto mt-8 mb-0 max-w-md'>
                  <div>
                    <label htmlFor='email' className='block mb-1 text-emerald-900'>
                      Email
                    </label>
                    <div className='relative'>
                      <input
                        id='email'
                        type='email'
                        className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
                        placeholder='Enter email'
                      />
                      <span className='absolute inset-y-0 right-4 inline-flex items-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-5 w-5 text-gray-400'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div>
                    <label htmlFor='password' className='block mb-1 text-emerald-900'>
                      Password
                    </label>
                    <div className='relative'>
                      <input
                        id='password'
                        type='password'
                        className='w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm'
                        placeholder='Enter password'
                      />
                      <span className='absolute inset-y-0 right-4 inline-flex items-center'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-5 w-5 text-gray-400'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                          />
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className='flex items-center justify-between mt-1'>
                    <p className='text-sm text-gray-500'>
                      계정이 이미 있으신가요?
                      <a className='underline ml-1' href='/'>
                        로그인
                      </a>
                    </p>
                    <button
                      type='button'
                      className='ml-3 inline-block rounded-lg bg-cyan-800 px-5 py-3 text-sm font-medium text-white'>
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
              <div>
                <p className='mx-auto mt-8 max-w-md text-center leading-relaxed text-gray-500 lg:text-left'>
                  간단하게 회원가입을 하세요. Vintz To Do를 사용하여 일정을 효율적으로 관리
                  해보세요.
                </p>
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
