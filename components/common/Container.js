import cn from 'classnames'

const Container = ({ children, className, el = 'div', clean }) => {
  let Component = el

  return (
    <Component
      className={cn(
        {
          'container max-w-[1270px] w-full mx-auto  px-5 md:px-10 lg:px-[50px]':
            !clean,
        },
        className
      )}
    >
      {children}
    </Component>
  )
}

export default Container
