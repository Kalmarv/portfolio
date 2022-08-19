import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/dracula'

const Code: React.FC<{ language: Language; code: string }> = ({ language, code }) => {
  return (
    <Highlight {...defaultProps} theme={theme} code={code.trim()} language={language}>
      {({ style, tokens, getLineProps, getTokenProps }) => (
        <pre className='max-w-sm overflow-scroll rounded-lg p-2 sm:max-w-prose' style={style}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default Code
