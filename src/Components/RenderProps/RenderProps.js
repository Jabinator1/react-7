import React from 'react'
import '../style.css'
import Toggle from './Toggle'
import ToggleRenderProps from './ToggleRenderProps'

const RenderProps = props => {
  return (
    <section className="advanced-react-section">
      <h1>
        Render Props
        <a
          href="https://reactjs.org/docs/render-props.html"
          rel="noopener"
          target="__blank"
        >
          Docs
        </a>
      </h1>
      <Toggle>
        <div>I am the child of Toggle</div>
      </Toggle>

      <ToggleRenderProps render={( ({show, setShow, style}) => (
          <div>
            {show && <h1>I am of a Child of TRP</h1>}
            <button style={style} onClick={() => setShow(!show)}>Show/Hide</button>
          </div>
        ))}
      />

      <ToggleRenderProps>
        {({show, setShow, style}) => (
          <div>
            {show && <h1>I am of a Child of TRP</h1>}
            <button style={style} onClick={() => setShow(!show)}>Show/Hide</button>
          </div>
        )}
      </ToggleRenderProps>
    </section>
  )
}
export default RenderProps
