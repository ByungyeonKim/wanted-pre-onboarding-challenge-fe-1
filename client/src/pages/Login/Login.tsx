import { useState } from 'react';
import styles from './Login.module.css';

export const Login = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const lazyImg = isLoaded ? styles['lazy-loaded'] : styles['lazy'];

  setTimeout(() => {
    setIsLoaded(true);
  }, 300);

  return (
    <div className='md:bg-green-800/90 md:flex h-full w-full justify-center items-center'>
      <div className='md:flex md:px-7 max-w-6xl md:max-lg:max-h-[648px] lg:max-h-[762px] mx-auto h-full'>
        <div className='md:bg-gray-100 md:flex-1 flex flex-col h-full'>
          <header className='md:bg-gray-100 md:text-emerald-900/80 md:py-6 md:pb-0 flex items-center justify-center gap-2 text-white py-3 bg-green-800/90'>
            <svg className='h-8' viewBox='0 0 27 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z'
                fill='currentColor'
              />
            </svg>
            <h1 className='font-bold'>Vintz TODO</h1>
          </header>
          <main className='bg-gray-100 flex-1'>
            <div className='md:hidden flex justify-center items-center h-[220px] overflow-hidden bg-[#f6dbc4]'>
              <img
                className={`${lazyImg} object-cover object-center`}
                src='img/camping.png'
                alt='캠핑'
              />
            </div>
            <section className='md:h-full max-w-md mx-auto flex flex-col justify-center px-4 py-7 pb-0'>
              <h2 className='font-semibold text-lg text-emerald-900'>
                여행을 떠나기 전, 할 일 목록을 만들어 보세요. 제가 관리해드릴게요.
              </h2>
              <p className='font-normal mt-2 text-emerald-600'>
                로그인을 위해 이메일과 비밀번호를 입력해주세요.
              </p>
              <div>
                <form className='flex flex-col gap-4 mx-auto mt-8 mb-0 max-w-md'>
                  <div>
                    <label htmlFor='email' className='block mb-1 text-emerald-900'>
                      Email
                    </label>
                    <div className='relative'>
                      <input
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
                      계정이 없으신가요?
                      <a className='underline ml-1' href='/'>
                        회원가입
                      </a>
                    </p>
                    <button className='ml-3 inline-block rounded-lg bg-emerald-700 px-5 py-3 text-sm font-medium text-white'>
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </main>
          <footer className='bg-gray-100'>
            <div className='md:space-y-7 flex flex-col justify-center items-center max-w-md mx-auto space-y-4 p-4'>
              <div>
                <p className='mx-auto max-w-md text-center leading-relaxed text-gray-500 lg:text-left'>
                  회원가입은 매우 간단합니다. 로그인을 통해 강력한 TODO 기능들을 경험해보세요!
                  다양한 기능들이 무료로 제공됩니다.
                </p>
              </div>
              <nav>
                <ul className='text-sm flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12'>
                  <li>
                    <a title='About 빈츠' className='text-gray-400' href='/'>
                      About
                    </a>
                  </li>
                  <li>
                    <a title='프로젝트 목록' href='/' className='text-gray-400'>
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      title='개발 전용차선 블로그'
                      href='https://onlydev.tistory.com/'
                      rel='noopener noreferrer'
                      target='_blank'
                      className='text-gray-400'>
                      Blog
                    </a>
                  </li>
                </ul>
              </nav>
              <p className='text-center text-sm text-gray-500 lg:text-right'>
                Copyright &copy; 2023. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
        <div className='md:flex flex-1 justify-center items-center hidden overflow-hidden bg-[#f6dbc4]'>
          <img
            className={`${lazyImg} object-cover object-center`}
            src='img/camping.png'
            alt='캠핑'
          />
        </div>
      </div>
    </div>
  );
};
