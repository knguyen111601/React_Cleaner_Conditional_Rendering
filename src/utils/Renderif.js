// Custom hook that accepts that have isTrue and children
// Cleaner way of writing conditional statements in JSX 

export const RenderIf = ({children, isTrue}) => {
            // Children are going to be the things within <RenderIf></RenderIf>
            // Such as <h1></h1> inside
    return isTrue ? children : null // if isTrue is true, return children. Else, return null
}