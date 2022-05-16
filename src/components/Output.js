import { useEffect } from 'react'
import Header from './Header'
import ReactMarkDown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useSelector, useDispatch } from 'react-redux';
import { isClicked, textHelp, changeUserText, userText } from '../redux/markdownTextSlice';
import { Col, FloatingLabel, Form } from 'react-bootstrap'

function Output() {
  const dispatch = useDispatch();
  const clicked = useSelector(isClicked);
  const helpText = useSelector(textHelp);
  const textUser = useSelector(userText);

  useEffect(() => {
    const textarea = document.getElementById('textarea');
    if (clicked === true) {
      textarea.disabled = true;
    } else {
      textarea.disabled = false;
    }
  }, [clicked])

  return (
    <>
      <Col xs={{ span: 12, offset: 0 }} className='mx-0 px-0 stickyMaker '>
        <Header />
      </Col>
      <Col xs={{ span: 5, offset: 1 }}>
        <FloatingLabel  >
          <Form.Control
            as="textarea"
            id="textarea"
            className="outputBox"
            value={`${clicked ? helpText : textUser}`}
            onChange={(e) => dispatch(changeUserText(e.target.value))}
          />
        </FloatingLabel>
      </Col>
      <Col xs={{ span: 5, offset: 0 }} className='pb-5'>
        <ReactMarkDown
          id='reactMarkDown'
          className="outputBox"
          children={`${clicked ? helpText : textUser}`}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={docco}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
        />
      </Col>
    </>
  )
}

export default Output