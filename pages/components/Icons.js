import '../../public/icons.svg';

const Icon = ({
  name,
  width,
  height,
}) => (
  <svg className={`icon icon-${name}`} width={width} height={height}>
    <use xlinkHref={`#icons_${name}`} />
  </svg>
)

export default Icon;
