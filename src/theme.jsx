import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    body: '#fff',
    fontColor: '#000'
}

export const darkTheme = {
    body: '#000',
    fontColor: '#fff',
    card: '#808080'
}

export const greenTheme = {
    body: '#96F550',
    fontColor: '#1E2019'

}

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.fontColor};
    }
    .card {
        background-color: ${(props) => props.theme.card};
        color: ${(props) => props.theme.fontColor}
    }
`