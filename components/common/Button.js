import classNames from 'classnames'

const classNameSizeMapMap = {
  sm: 'text-[13px] leading-[16px] min-h-[40px] h-[40px] px-4',
  md: 'text-[13px] leading-[16px] min-h-[40px] h-[40px] px-4 md:text-[15px] md:min-h-[52px] md:h-[52px] md:px-8',
  lg: 'text-[48px] leading-[56px] min-h-[60px] h-[40px] px-4',
}
const Button = ({
  variant = 'body',
  html,
  size = 'md',
  className,
  onClick,
  style,
  children,
}) => {
  const htmlContentProps = html
    ? {
        dangerouslySetInnerHTML: { __html: html },
      }
    : {}
  return (
    <button
      className={classNames(
        'font-bold btn-reset rounded-sm md:rounded ',
        classNameSizeMapMap[size],
        className
      )}
      onClick={onClick}
      style={style}
      {...htmlContentProps}
    >
      {children}
    </button>
  )
}

export default Button
