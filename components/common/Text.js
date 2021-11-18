import classNames from 'classnames'
const componentsMap = {
  body: 'div',
  heading: 'h1',
  pageHeading: 'h1',
  sectionHeading: 'h2',
}
const classNameMap = {
  body: '',
  heading: 'text-[48px] leading-[56px] md:text-[96px] md:leading-[100px]',
  pageHeading: 'text-[48px] leading-[56px] md:text-[96px] md:leading-[100px]',
  sectionHeading:
    'text-[32px] leading-[48px]  md:text-[56px] md:leading-[64px]',
}
const Text = ({
  variant = 'body',
  html,
  className,
  onClick,
  style,
  children,
}) => {
  const Component = componentsMap[variant] || componentsMap.body
  const htmlContentProps = html
    ? {
        dangerouslySetInnerHTML: { __html: html },
      }
    : {}
  return (
    <Component
      className={classNames(classNameMap[variant], className)}
      onClick={onClick}
      style={style}
      {...htmlContentProps}
    >
      {children}
    </Component>
  )
}

export default Text
