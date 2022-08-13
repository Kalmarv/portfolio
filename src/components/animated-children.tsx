import { a, useTrail, UseTrailProps } from 'react-spring'

type animationProps = {
  children: JSX.Element[]
  containerStyle?: string
  outerStyle?: string
  innerStyle?: string
  trailConfig: UseTrailProps
}

const AnimatedChildren: React.FC<animationProps> = ({
  children,
  containerStyle,
  outerStyle,
  innerStyle,
  trailConfig,
}) => {
  const trail = useTrail(children.length, trailConfig)

  return (
    <div className={containerStyle ?? ''}>
      {trail.map(({ ...style }, index) => (
        <a.div key={index} className={outerStyle ?? ''} style={style}>
          <div className={innerStyle ?? ''}>{children[index]}</div>
        </a.div>
      ))}
    </div>
  )
}

export default AnimatedChildren
