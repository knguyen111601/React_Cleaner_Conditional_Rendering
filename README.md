# React - Cleaner Conditional Rendering

## Introduction
Within React, one would typically manage what is rendered through the use of ternary operators:
```
    const [value, setValue] = useState(5)

    return (
        <>
        {value === 5
            ? <h1>Value is 5!</h1>
            : <h1>Value is not 5! </h1>
        }
        </h1>
    )

```
This method of writing ternary operators directly into the JSX could lead to code that is very difficult to comprehend. Thus, creating a much more difficult codebase to work out of; especially on a team.


## The Custom Component
In this codebase, I've created a custom component called "RenderIf" that can be discovered within the "utils" folder under the src. 

This custom component accepts a "isTrue" argument as well as any children you decide you want to render. 

The code for the component looks like this: 
```
export const RenderIf = ({children, isTrue}) => {
    return isTrue ? children : null 
}
```
The component is a basic ternary operator statement that will determine whether "isTrue" is true or false. If it is true, it will render its children. Otherwise, it won't render anything and return null 

## In Use
We saw earlier that we are trying to render some JSX dependent on what our current state was. In our case, when the number was 5, it would render an h1 that states the value is 5. Otherwise it would render an h1 that says it is not.

Here is the custom "RenderIf" component in action.
```
  const [value, setValue] = useState(5)


  return (
    <>

    <i>Current Value: {value}</i>

    <RenderIf isTrue={value === 5}> 
      <h1>Value is 5! I will get rendered!</h1>
      <button onClick={()=> setValue(5)}>Update</button>
    </RenderIf>

    <RenderIf isTrue={value===3}> 
      <h1>I will get rendered when value is 3!</h1>
      <button onClick={()=> setValue(5)}>Update</button>
    </RenderIf>
    </>
  );
```

For easier comprehension, "RenderIf" has isTrue in its prop that is set to a statement. One component has a statement for value === 5 and one has a statement for value === 3.

As we saw previously, the isTrue statement is in a ternary operation that entails whether the children are returned or not. 

The "children" here are the items written within the &lt;RenderIf> &lt;/RenderIf> and are being rendered only is isTrue is true

## Conclusion
As ternary operators are very commonly utilized in the management of rendered items on a page, the RenderIf component greatly improves readability and semantics in React.