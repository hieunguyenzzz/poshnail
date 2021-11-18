import pageProps from '@assets/data'
import Button from '@components/common/Button'
import Container from '@components/common/Container'
import Layout from '@components/common/Layout'
import Text from '@components/common/Text'
export default function Home() {
  return (
    <Layout pageProps={pageProps}>
      <div className="space-y-[73px] md:space-y-[120px] text-center">
        <section>
          <Container>
            <div className="flex flex-col items-center gap-12">
              <div className="flex flex-col items-center w-full text-center">
                <Text variant="heading" className="px-6">
                  Take care of your nails
                </Text>
                <p className="px-4 mt-4 mb-6 md:mt-8 md:max-w-[456px]">
                  Our mission is to provide the highest quality nail enhancement
                  services along with courteous customer service.
                </p>
                <Button className="btn btn-primary">Book an appointment</Button>
              </div>
              <div
                className="w-full bg-base-100"
                style={{ paddingTop: (595 / 688) * 100 + '%' }}
              ></div>
            </div>
          </Container>
        </section>
        <section className="w-full">
          <Container>
            <div className="flex flex-col items-center gap-12">
              <div className="flex flex-col items-center w-full text-center md:max-w-[580px]">
                <Text variant="sectionHeading" className="">
                  We have a lot of benefits you may like
                </Text>
                <div className="mt-6 mb-6 space-y-2 md:text-base">
                  <p>
                    Our mission is to provide the highest quality nail
                    enhancement services along with courteous customer service.
                    We are one of the few nail salons in NY that has a certified
                    ventilation system installed on every station to provide our
                    employees and clients a safe and clean breathing zone.
                  </p>
                  <p>
                    We keep our facility clean, tools sanitized, and only offer
                    the highest tier of polish brands with no dilution like our
                    competitors.
                  </p>
                </div>
                <Button className="btn btn-primary">Book an appointment</Button>
              </div>
              <div className="w-full bg-base-100">
                <div
                  className="w-full md:hidden"
                  style={{ paddingTop: (395 / 335) * 100 + '%' }}
                ></div>
                <div
                  className="hidden w-full md:block"
                  style={{ paddingTop: (506 / 642) * 100 + '%' }}
                ></div>
              </div>
            </div>
          </Container>
        </section>
        <section>
          <Container>
            <div className="flex flex-col items-center gap-12">
              <div className="flex flex-col items-start w-full text-left md:text-center">
                <Text variant="sectionHeading" className="w-full ">
                  Our Services
                </Text>
                <div className="w-full mt-6">
                  <div className="grid grid-cols-2 text-xs text-left md:grid-cols-3 gap-x-8 gap-y-4">
                    <div>Acrylic full set</div>
                    <div>Acrylic nails cut</div>
                    <div>Acrylic fill in</div>
                    <div>UV gel full set</div>
                    <div>UV gel french full set</div>
                    <div>UV gel fill in</div>
                    <div>UV gel french fill in</div>
                    <div>Color gel manicure</div>
                    <div>Color gel french manicure</div>
                    <div>Color gel pedicure</div>
                    <div>SNS nails</div>
                    <div>SNS nail extensions</div>
                    <div>SNS french nails</div>
                    <div>Callus</div>
                    <div>Polish change on nails</div>
                    <div>Polish change on toes</div>
                    <div>Other shapes (except square)</div>
                    <div>Children's manicure (under 12)</div>
                    <div>Children's pedicure (under 12)</div>
                    <div>Manicure &amp; pedicure</div>
                    <div>Spa pedicure</div>
                    <div>Manicure</div>
                    <div>Pedicure</div>
                    <div>Silk full set</div>
                    <div>Sill fill in</div>
                    <div>French art</div>
                    <div>French full set</div>
                    <div>Take off</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section>
          <Container>
            <div className="flex flex-col items-center gap-12">
              <div className="flex flex-col items-start w-full text-left">
                <Text variant="sectionHeading" className="">
                  Our musts
                </Text>
                <div className="w-full mt-6">
                  <div className="flex flex-col w-full">
                    <div
                      style={{ ColumnCount: 2 }}
                      className="gap-10 space-y-2"
                    >
                      <div
                        className="flex items-start space-x-2 "
                        style={{
                          pageBreakInside: 'avoid',
                          breakInside: 'avoid-column',
                        }}
                      >
                        <svg
                          fill="none"
                          height={16}
                          viewBox="0 0 16 16"
                          className="flex-shrink-0  mt-0.5"
                          width={16}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3332 4L5.99984 11.3333L2.6665 8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            stroke="currentColor"
                          />
                        </svg>
                        <div>
                          All employees and clients will be required to wear
                          masks, no exceptions.
                        </div>
                      </div>
                      <div
                        className="flex items-start space-x-2"
                        style={{
                          pageBreakInside: 'avoid',
                          breakInside: 'avoid-column',
                        }}
                      >
                        <svg
                          fill="none"
                          height={16}
                          viewBox="0 0 16 16"
                          className="flex-shrink-0  mt-0.5"
                          width={16}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3332 4L5.99984 11.3333L2.6665 8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            stroke="currentColor"
                          />
                        </svg>
                        <div>
                          If you do not have a face mask, one will be provided
                          prior to entry and service.
                        </div>
                      </div>
                      <div
                        className="flex items-start space-x-2"
                        style={{
                          pageBreakInside: 'avoid',
                          breakInside: 'avoid-column',
                        }}
                      >
                        <svg
                          fill="none"
                          height={16}
                          viewBox="0 0 16 16"
                          className="flex-shrink-0  mt-0.5"
                          width={16}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3332 4L5.99984 11.3333L2.6665 8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            stroke="currentColor"
                          />
                        </svg>
                        <div>
                          Online appointments are preferred, walk-in clients may
                          experience prolonged waiting periods and/or
                          rescheduled for future availability.
                        </div>
                      </div>
                      <div
                        className="flex items-start space-x-2"
                        style={{
                          pageBreakInside: 'avoid',
                          breakInside: 'avoid-column',
                        }}
                      >
                        <svg
                          fill="none"
                          height={16}
                          viewBox="0 0 16 16"
                          className="flex-shrink-0  mt-0.5"
                          width={16}
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.3332 4L5.99984 11.3333L2.6665 8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            stroke="currentColor"
                          />
                        </svg>
                        <div>
                          Touch less temperature checks will be performed on all
                          employees before entry and periodically.
                        </div>
                      </div>
                      <div
                        className="flex items-start space-x-2"
                        style={{
                          pageBreakInside: 'avoid',
                          breakInside: 'avoid-column',
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0  mt-0.5"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M13.3332 4L5.99984 11.3333L2.6665 8"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div>
                          All stations will be cleaned and sanitized after each
                          use.
                        </div>
                      </div>
                      <div
                        className="flex items-start space-x-2"
                        style={{
                          pageBreakInside: 'avoid',
                          breakInside: 'avoid-column',
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0 mt-0.5"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M13.3332 4L5.99984 11.3333L2.6665 8"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div>
                          Employees and clients are to wash hands thoroughly
                          prior to servicing.
                        </div>
                      </div>
                      <div
                        className="flex items-start space-x-2"
                        style={{
                          pageBreakInside: 'avoid',
                          breakInside: 'avoid-column',
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0  mt-0.5"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M13.3332 4L5.99984 11.3333L2.6665 8"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div>
                          Hand sanitizers will be readily available on all
                          manicure, pedicure, and drying stations.
                        </div>
                      </div>
                      <div
                        className="flex items-start space-x-2"
                        style={{
                          pageBreakInside: 'avoid',
                          breakInside: 'avoid-column',
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0  mt-0.5"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M13.3332 4L5.99984 11.3333L2.6665 8"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div>
                          We are limiting the amount of clients within the
                          store. Outdoor waiting area is available if weather
                          permitted.
                        </div>
                      </div>
                      <div
                        className="flex items-start space-x-2"
                        style={{
                          pageBreakInside: 'avoid',
                          breakInside: 'avoid-column',
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-shrink-0  mt-0.5"
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M13.3332 4L5.99984 11.3333L2.6665 8"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div>
                          Sneeze guard barriers will be installed on every
                          manicure station as an extra precautionary measure.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-full bg-base-100">
                <div
                  className="w-full md:hidden"
                  style={{ paddingTop: (395 / 335) * 100 + '%' }}
                ></div>
                <div
                  className="hidden w-full "
                  style={{ paddingTop: (654 / 685) * 100 + '%' }}
                ></div>
              </div>
            </div>
          </Container>
        </section>
        <section className="w-full">
          <Container>
            <div className="flex flex-col items-center gap-12 md:flex-row md:gap-[73px]">
              <div className="flex flex-col items-center w-full text-center md:text-left md:items-start md:max-w-[275px]">
                <h2 className="text-[32px] leading-[48px]  md:text-[48px] md:leading-[64px]">
                  Contact us
                </h2>
                <div className="mt-6 mb-8 space-y-6 md:mb-6">
                  <div className="flex items-start justify-center gap-2 md:justify-start">
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
                  <div className="flex items-start justify-center gap-2 md:justify-start">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M16 7.54545C16 12.6364 9 17 9 17C9 17 2 12.6364 2 7.54545C2 5.80949 2.7375 4.14463 4.05025 2.91712C5.36301 1.68961 7.14348 1 9 1C10.8565 1 12.637 1.68961 13.9497 2.91712C15.2625 4.14463 16 5.80949 16 7.54545Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>700A 5th Avenue, Brooklyn, NY 11215</div>
                  </div>
                </div>
                <Button className="btn btn-primary">Book an appointment</Button>
              </div>
              <div className="relative flex-1 w-full h-full bg-base-100">
                <div
                  className="relative w-full "
                  style={{ paddingTop: (214 / 335) * 100 + '%' }}
                ></div>
                <iframe
                  className="absolute inset-0"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4426.206294792222!2d-3.9690605484530104!3d51.617319232574346!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486ef52ae58598d3%3A0x1775a01b75ed9198!2sVietnam%20Restaurant!5e0!3m2!1svi!2s!4v1634099863710!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </Container>
        </section>
      </div>
    </Layout>
  )
}
