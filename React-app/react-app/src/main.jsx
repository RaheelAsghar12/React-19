import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import User from './User.jsx'
import Toggle from './toggle.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Colour,{Button, Dollar,key,Rupee} from './App.jsx'
import Apps from './state.jsx'
import Input from './input.jsx'
import Task from './inputfieldtask.jsx'
import Checkbox from './checkbox.jsx'
import Radiobutton from './radiobutton.jsx'
import Loopmap from './loopwithmapfun.jsx'
import Reuse from './reusecomponent.jsx'
import Colours from './propstask.jsx'
import Nested from './nestedloop.jsx'
import Useffect from './useeffect.jsx'
import Effectprop from './propeffect.jsx'
import Inline from './inlinestyle.jsx'
import Inlines from './dynamicAndconditionalstyle.jsx'
import Todo from './todoapp.jsx'
import Externalcss from './externalcss.jsx'
import Userprofile from './userprofile.jsx'
import Styledcom from './styledcomponents.jsx'
import Bootstrap from './bootstrap.jsx'
import UseRefHook from './useRefhook.jsx'
import Uncontrolledcomponent from './uncontrolledcomponent.jsx'
import Function from './functionpassing.jsx'
import Forwardref from './forwardref.jsx'
import Formstatushook from './Formstatushook.jsx'
import UseTransition from './useTransitioinhook.jsx'
import Derived from './derivedstate.jsx'
import LiftingStateUP from './LiftingStateUp.jsx'
import UpdateObject from './updatestateobject.jsx'
import UpdateArray from './updatearraystate.jsx'
import UseActionState from './useActionStateHook.jsx'
import Calculator from './calculator.jsx'
import CustomHook from './Customhook.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
<CustomHook/>
     {/* <Calculator/> */}
{/* <UseActionState/>  */}

    {/* <UpdateArray/>
    <hr /><br />
<UpdateObject/>
<hr /><br /> */}
    {/* <LiftingStateUP/>
    <hr /><br />
    <Derived/>
    <hr /><br />
    <UseTransition/>
    <hr /><br />
    <Formstatushook/>
    <hr /><br />
    <Forwardref/>
    <hr /><br />
    <Function/>
    <hr /><br />
    <Uncontrolledcomponent/>
    <hr /><br />
    <UseRefHook/>
    <hr /><br />
    <Bootstrap/>
    <hr />
    <Styledcom/>
    <hr />
    <Userprofile/>
    <hr />
    <Externalcss/>
    <hr />
<Todo/>
    <hr />
    <Inlines/>
    <hr />
    <Inline/>
    <hr />
    <Effectprop/>
    <hr />
    <Useffect/>
    <hr />
    <Nested/>
    <hr />
    <Colours/>
    <hr />
    <Reuse/>
    <hr />
    <Loopmap/>
    <hr />
    <Radiobutton/>
    <hr />
    <Checkbox/>
    <hr />
    <Task/>
    <hr />
    <Input/>
    <hr />
    <Colour />
    <hr />
    <User name="RAHEEL ASGHAR" marks={100} fathername="Asghar Hayat"/>
    <hr />
    <Toggle></Toggle>
    <hr />
    <Apps/>
    <hr />
    <Dollar/>
    <hr />
    <Rupee/>
    <h1>{key}</h1>
    <hr />
    <Button/> */}
  </StrictMode>,
)
