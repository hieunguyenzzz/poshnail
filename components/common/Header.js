import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import Button from './Button'
import Container from './Container'
import Link from './Link'
export const Header = ({ pageProps }) => {
  const headerRef = useRef()
  const { basePath = '/' } = useRouter()
  const [showUp, setShowUp] = useState()
  const [openMenu, setOpenMenu] = useState()
  const [status, setStatus] = useState('reset')
  useEffect(() => {
    const headerElement = headerRef.current
    if (!headerElement) {
      return
    }
    let currentScrollTop
    let headerBounds
    const hide = () => {
      setStatus('hide')
    }
    const reveal = () => {
      setStatus('reveal')
    }
    const reset = () => {
      setStatus('reset')
    }
    const onScrollHandler = () => {
      const offset = 0
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      if (scrollTop > offset) {
        requestAnimationFrame(() => setShowUp(true))
      } else {
        requestAnimationFrame(() => setShowUp(false))
      }
      if (scrollTop < offset) {
        requestAnimationFrame(reset)
      } else {
        if (scrollTop > currentScrollTop && scrollTop > headerBounds.bottom) {
          requestAnimationFrame(hide)
        } else if (
          scrollTop < currentScrollTop &&
          scrollTop > headerBounds.bottom
        ) {
          requestAnimationFrame(reveal)
        } else if (headerBounds && scrollTop <= headerBounds.top) {
          requestAnimationFrame(reset)
        }
      }

      currentScrollTop = scrollTop
    }
    const createObserver = (element) => {
      let observer = new IntersectionObserver((entries, observer) => {
        headerBounds = entries[0].intersectionRect
        observer.disconnect()
      })
      observer.observe(element)
    }
    window.addEventListener('scroll', onScrollHandler, false)
    createObserver(headerElement)
    return () => {
      window.removeEventListener('scroll', onScrollHandler, false)
    }
  }, [])
  const searchPath = basePath + '/'
  const menu = [
    {
      id: 'Servicea',
      label: 'Servicea',
      path: 'Servicea',
    },
    {
      id: 'Contact us',
      label: 'Contact us',
      path: 'Contact us',
    },
    {
      id: 'Blog',
      label: 'Blog',
      path: 'Blog',
    },
  ]
  return (
    <>
      <header className="sticky top-0 z-10 pointer-events-none h-header font-heading">
        <div
          ref={headerRef}
          className={(() => {
            let headerClass = 'h-header flex items-center transition-all'
            if (!openMenu) {
              switch (status) {
                case 'reveal':
                  headerClass =
                    'flex items-center    transition-all transform translate-y-O'
                  break
                case 'hide':
                  headerClass =
                    'flex items-center    transition-all transform translate-y-[-100%]'
                  break
                case 'reset':
                default:
                  headerClass = 'flex items-center    transition-all'
                  break
              }
            }

            return headerClass
          })()}
          style={
            status !== 'reset'
              ? {
                  '--header-height': '80px',
                }
              : null
          }
        >
          <Container>
            <div className="w-full h-full pointer-events-auto">
              <div className="flex items-center justify-between w-full gap-6 transition-all h-header">
                <div className="flex-1">
                  <div className="hidden md:block">
                    <div>
                      <nav
                        itemScope="itemscope"
                        itemType="https://schema.org/SiteNavigationElement"
                      >
                        <ul
                          className="flex  gap-x-4 gap-y-1 py-2 text-[13px]"
                          style={{
                            touchAction: 'pan-y',
                          }}
                        >
                          {menu.map(({ path, label, children }, i) => {
                            if (i > 3) return null
                            if (children) {
                              return (
                                <li
                                  key={i}
                                  className="relative flex items-center group"
                                >
                                  <Link
                                    className="hover:text-[#a58858]"
                                    href={path}
                                  >
                                    <span>{label}</span>
                                  </Link>
                                  <div className="absolute hidden gap-4 transform -translate-x-1/2 shadow left-1/2 top-full group-hover:block">
                                    <div className="flex flex-col gap-1 py-3 bg-base-200 animated fadeIn">
                                      {children.map(({ path, label }, i) => {
                                        return (
                                          <div
                                            key={i}
                                            className="inline-block px-10  hover:text-[#a58858] truncate"
                                          >
                                            <Link href={path}>
                                              <span>{label}</span>
                                            </Link>
                                          </div>
                                        )
                                      })}
                                    </div>
                                  </div>
                                </li>
                              )
                            }
                            return (
                              <li key={i} className="flex items-center py-2 ">
                                <Link
                                  className="hover:text-[#a58858]"
                                  href={path}
                                >
                                  <span>{label}</span>
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>

                <div
                  className={`text-2xl ${
                    status === 'reset' ? 'py-5' : 'py-2'
                  }  lg:text-[30.6px] h-full transition-all flex justify-center`}
                >
                  <Link className="hover:text-[#a58858] max-h-full" href="/">
                    <img
                      className="h-full w-[138px] object-contain"
                      src={basePath + '/logo.png'}
                      alt="logo"
                    ></img>
                  </Link>
                </div>

                <input hidden type="checkbox" id="openNav" name="openNav" />
                <div className="flex-1 block md:hidden">
                  <div className="flex items-center justify-end w-full group">
                    <button
                      className="relative text-4xl w-9 h-9"
                      onClick={() => {
                        setOpenMenu(!openMenu)
                      }}
                    >
                      <svg
                        className={classNames(
                          'transition-all transform absolute inset-0 w-full h-full',
                          openMenu
                            ? 'rotate-90 opacity-0 pointer-events-none'
                            : 'rotate-0 opacity-100'
                        )}
                        xmlns="http://www.w3.org/2000/svg"
                        width={'1em'}
                        height={'1em'}
                        viewBox="0 0 36 36"
                        fill="none"
                        style={{ fill: 'black' }}
                      >
                        <path
                          d="M4.5 18H31.5"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.5 9H31.5"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M4.5 27H31.5"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <svg
                        className={classNames(
                          'transition-all transform absolute inset-0 w-full h-full',
                          !openMenu
                            ? '-rotate-90 opacity-0 pointer-events-none'
                            : 'rotate-0 opacity-100'
                        )}
                        xmlns="http://www.w3.org/2000/svg"
                        width={36}
                        height={36}
                        viewBox="0 0 36 36"
                        fill="none"
                      >
                        <path
                          d="M4.5 9L31.5 27"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M31.5 9L4.5 27"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <div
                      style={{
                        overscrollBehavior: 'contain',
                      }}
                      className={classNames(
                        ` overflow-x-hidden py-5 flex flex-col justify-between space-y-8 fit top-header text-white bg-base-200 overflow-y-auto transition-all fixed left-0 w-full  transform origin-top  duration-700 `,
                        {
                          ' opacity-0 pointer-events-none  scale-y-0 ':
                            !openMenu,
                          'opacity-100 pointer-events-auto scale-y-100 ':
                            openMenu,
                        }
                      )}
                    >
                      <nav
                        className="flex flex-col justify-between flex-1 min-h-full mt-12 "
                        itemScope="itemscope"
                        itemType="https://schema.org/SiteNavigationElement"
                      >
                        <div
                          className="flex flex-col flex-wrap space-y-6  text-lg lg:text-[17px]  text-center"
                          style={{
                            touchAction: 'pan-x',
                          }}
                        >
                          {menu.map(({ path, label, children }, i) => {
                            if (children) {
                              return (
                                <div
                                  key={i}
                                  className="block w-full px-10 pointer-events-auto focus:pointer-events-none group"
                                  tabIndex={0}
                                >
                                  <div className="w-full flex items-center  text-2xl hover:text-[#d85726]">
                                    <div className="flex-1 py-1 text-left">
                                      <span className="capitalize ">
                                        {label}
                                      </span>
                                    </div>
                                    {!!children?.length && (
                                      <div className="transform transition-transform rotate-90 text-white group-focus:-rotate-90 duration-300 ease-in-out text-[24px]">
                                        <svg
                                          stroke="currentColor"
                                          fill="none"
                                          strokeWidth={0}
                                          viewBox="0 0 24 24"
                                          height="1em"
                                          width="1em"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <polyline
                                            strokeWidth={2}
                                            points="9 6 15 12 9 18"
                                          />
                                        </svg>
                                      </div>
                                    )}
                                  </div>
                                  {!!children?.length && (
                                    <div className="h-0 -mt-4 overflow-hidden whitespace-pre-line transition-all pointer-events-auto group-focus:h-auto group-focus:block group-focus:mt-0 focus-within:h-auto focus-within:block focus-within:mt-0">
                                      {children.map(({ path, label }, i) => {
                                        return (
                                          <div
                                            key={i}
                                            onClick={(e) => {
                                              e.stopPropagation()
                                            }}
                                            className="inline-block mt-6 w-[28rem] text-xl hover:text-[#d85726]"
                                          >
                                            <Link
                                              onClick={(e) => {
                                                e.stopPropagation()
                                              }}
                                              href={path}
                                            >
                                              <span>{label}</span>
                                            </Link>
                                          </div>
                                        )
                                      })}
                                    </div>
                                  )}
                                </div>
                              )
                            }
                            return (
                              <div
                                key={i}
                                className="inline-block text-2xl hover:text-[#d85726]"
                              >
                                <Link href={path}>
                                  <span>{label}</span>
                                </Link>
                              </div>
                            )
                          })}
                        </div>
                      </nav>
                      <Container>
                        <div className="flex items-start justify-center gap-2 mb-5">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={18}
                              height={18}
                              viewBox="0 0 18 18"
                              fill="none"
                            >
                              <path
                                d="M11.2876 3.75C12.0201 3.89292 12.6934 4.25119 13.2211 4.77895C13.7489 5.30671 14.1071 5.97995 14.2501 6.7125M11.2876 0.75C12.8095 0.919077 14.2288 1.60063 15.3123 2.68276C16.3957 3.76488 17.0791 5.18326 17.2501 6.705M16.5001 12.69V14.94C16.5009 15.1489 16.4581 15.3556 16.3745 15.547C16.2908 15.7384 16.168 15.9102 16.0141 16.0514C15.8602 16.1926 15.6785 16.3001 15.4806 16.367C15.2828 16.4339 15.0731 16.4588 14.8651 16.44C12.5572 16.1892 10.3403 15.4006 8.39257 14.1375C6.58044 12.986 5.04407 11.4496 3.89257 9.6375C2.62506 7.6809 1.83625 5.45325 1.59007 3.135C1.57133 2.9276 1.59598 2.71857 1.66245 2.52122C1.72892 2.32387 1.83575 2.14252 1.97615 1.98872C2.11654 1.83491 2.28743 1.71203 2.47792 1.62789C2.6684 1.54375 2.87433 1.5002 3.08257 1.5H5.33257C5.69655 1.49642 6.04942 1.62531 6.32539 1.86265C6.60137 2.09999 6.78163 2.42959 6.83257 2.79C6.92754 3.51005 7.10366 4.21705 7.35757 4.8975C7.45848 5.16594 7.48032 5.45769 7.4205 5.73816C7.36069 6.01863 7.22172 6.27608 7.02007 6.48L6.06757 7.4325C7.13524 9.31016 8.68991 10.8648 10.5676 11.9325L11.5201 10.98C11.724 10.7784 11.9814 10.6394 12.2619 10.5796C12.5424 10.5198 12.8341 10.5416 13.1026 10.6425C13.783 10.8964 14.49 11.0725 15.2101 11.1675C15.5744 11.2189 15.9071 11.4024 16.145 11.6831C16.3828 11.9638 16.5092 12.3222 16.5001 12.69Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div>718-717-8209</div>
                        </div>
                        <Button className="block w-full btn btn-primary">
                          Book an appointment
                        </Button>
                      </Container>
                    </div>
                  </div>
                  <div className="hidden">
                    <div className="">
                      <div className="">
                        <form
                          role="search"
                          method="get"
                          className="search_form"
                          action={searchPath}
                          data-inited-keypress={1}
                        >
                          <input type="hidden" defaultValue name="post_types" />
                          <input
                            type="text"
                            className="search_field fill_inited"
                            placeholder="Search"
                            defaultValue
                            name="s"
                          />
                          <button
                            type="submit"
                            className="search_submit trx_addons_icon-search"
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-center justify-end flex-1 hidden gap-5 md:flex itec">
                  <div className="items-start hidden gap-2 xl:flex">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M11.2876 3.75C12.0201 3.89292 12.6934 4.25119 13.2211 4.77895C13.7489 5.30671 14.1071 5.97995 14.2501 6.7125M11.2876 0.75C12.8095 0.919077 14.2288 1.60063 15.3123 2.68276C16.3957 3.76488 17.0791 5.18326 17.2501 6.705M16.5001 12.69V14.94C16.5009 15.1489 16.4581 15.3556 16.3745 15.547C16.2908 15.7384 16.168 15.9102 16.0141 16.0514C15.8602 16.1926 15.6785 16.3001 15.4806 16.367C15.2828 16.4339 15.0731 16.4588 14.8651 16.44C12.5572 16.1892 10.3403 15.4006 8.39257 14.1375C6.58044 12.986 5.04407 11.4496 3.89257 9.6375C2.62506 7.6809 1.83625 5.45325 1.59007 3.135C1.57133 2.9276 1.59598 2.71857 1.66245 2.52122C1.72892 2.32387 1.83575 2.14252 1.97615 1.98872C2.11654 1.83491 2.28743 1.71203 2.47792 1.62789C2.6684 1.54375 2.87433 1.5002 3.08257 1.5H5.33257C5.69655 1.49642 6.04942 1.62531 6.32539 1.86265C6.60137 2.09999 6.78163 2.42959 6.83257 2.79C6.92754 3.51005 7.10366 4.21705 7.35757 4.8975C7.45848 5.16594 7.48032 5.45769 7.4205 5.73816C7.36069 6.01863 7.22172 6.27608 7.02007 6.48L6.06757 7.4325C7.13524 9.31016 8.68991 10.8648 10.5676 11.9325L11.5201 10.98C11.724 10.7784 11.9814 10.6394 12.2619 10.5796C12.5424 10.5198 12.8341 10.5416 13.1026 10.6425C13.783 10.8964 14.49 11.0725 15.2101 11.1675C15.5744 11.2189 15.9071 11.4024 16.145 11.6831C16.3828 11.9638 16.5092 12.3222 16.5001 12.69Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>718-717-8209</div>
                  </div>
                  <Button
                    style={{
                      border: '1px solid hsla(var(--p)/var(--tw-bg-opacity,1))',
                    }}
                    size="sm"
                    className="bg-transparent border btn border-primary"
                  >
                    Book an appointment
                  </Button>
                </div>
              </div>
            </div>
          </Container>
          <div className="absolute inset-0 z-[-1] bg-base-200" />
        </div>
      </header>
      <div
        key="srollTopButton"
        style={{
          padding: `env(safe-area-inset-top, 1.5rem)
                    env(safe-area-inset-right, 1.5rem)
                    env(safe-area-inset-bottom, 1.5rem)
                    env(safe-area-inset-left, 1.5rem)`,
        }}
        className="fixed bottom-0 right-0 p-[2em] pointer-events-none z-[2]"
      >
        <div className="p-6">
          <div
            style={{
              willChange: 'tranform',
            }}
            className={classNames(
              'transition-all transform ease-in-out origin-bottom duration-200',
              showUp
                ? 'opacity-100 translate-y-0 pointer-events-auto'
                : 'opacity-0 translate-y-8 pointer-events-none'
            )}
          >
            <button
              style={{
                background: 'hsla(var(--p)/var(--tw-bg-opacity,1))',
              }}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: 'smooth',
                })
              }}
              className="flex items-center justify-center w-10 h-10 text-2xl text-white rounded-full bg-primary hover:bg-opacity-90 border-primary "
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 10 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 10l-1.5 1.5L5 7.75 1.5 11.5 0 10l5-5 5 5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
                input#search+#searchModal{
                    display:none
                }
                input#search:checked+#searchModal{
                    display:block
                }
            `,
        }}
      ></style>
      <input id="search" type="checkbox" hidden></input>
      <div
        id="searchModal"
        className="fixed inset-0 z-20 w-full h-full bg-base-200 bg-opacity-90 animated fadeIn"
      >
        <div className="relative flex items-center justify-center w-full min-h-full isolate">
          <label
            className="absolute inset-0 w-full h-full"
            htmlFor="search"
          ></label>
          <Container>
            <form
              role="search"
              method="get"
              className="relative flex items-center w-full max-w-2xl py-3 mx-auto space-x-3 text-2xl border-b-2 border-black"
              action={searchPath}
              data-inited-keypress={1}
            >
              <input type="hidden" name="post_types" hidden />
              <div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                </svg>
              </div>
              <input
                type="text"
                className="flex-1 block bg-transparent appearance-none search_field fill_inited focus:outline-none"
                placeholder="Search"
                name="s"
              />
            </form>
          </Container>
        </div>
      </div>
    </>
  )
}
