import {globalStyle, style} from '@vanilla-extract/css';
import listStyleImage from './assets/images/feature-list-item.png'


globalStyle('html, body', {
    margin: 0,
    padding: 0,
    fontFamily: 'Montserrat, serif'
});

export const container = style({
    background: '#f1f1f1',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
});

export const boardContainer = style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#FFFFFF',
    width: '300px',
    padding: '30px',
    margin: '10px',
    zIndex: 10,
    '@media': {
        '(max-width: 400px)': {
            width: '75vw',
        },
    }
})

export const boardHeader = style({})

globalStyle(`${boardHeader} > h2`, {
    color: '#3C4043',
    textAlign: 'center'
});

globalStyle(`${boardHeader} > p`, {
    color: '#636669',
    textAlign: 'center'
});
export const boardFeatureList = style({
    listStyleImage: `url(${listStyleImage})`,
    textAlign: 'left',
})

globalStyle(`${boardFeatureList} > li`, {
    color: '#8A8C8E',
    marginBottom: '12px',
    paddingLeft :'7px',
});

globalStyle(`${boardFeatureList} > li > span`, {
    fontWeight: 700, fontSize: '14px',
    color: '#3C4043'
});

export const boardPlanLimits = style({
    width: 'inherit',
    textAlign: 'center'
})

globalStyle(`${boardPlanLimits} > h4`, {
    textAlign: 'center',
    margin: '5px',
    color: '#242628'
});

globalStyle(`${boardPlanLimits} > div > small`, {
    color: '#E26559',
    fontWeight: 700
});
export const boardButtonContainer = style({
    width: 'inherit',
    marginTop: '10px'
})
export const boardButton = style({
    display: 'block',
    background: '#E26559',
    color: 'white',
    padding: '15px 30px',
    fontWeight: 700,
    width: '100%',
    border: 'none',
    cursor: 'pointer',
    ':hover': {
        background: '#B55147'
    },
    ':active': {
        background: '#883D35'
    },
    ':disabled': {
        opacity: 0.4,
        transition: 'background-color 200ms',
        cursor: 'not-allowed'
    }
})

export const boardProgressBar = style({
    appearance: 'none',
    width: '80%',
    height: '7px',
    border: 'none',
    '::-webkit-progress-bar': {
        backgroundColor: '#eee',
    },
    '::-webkit-progress-value': {
        backgroundColor: '#E26559',
        transition: 'width 1s'
    },
    '::-moz-progress-bar': {
        backgroundColor: '#E26559',
        transition: 'width 1ms'
    },
})

globalStyle('progress', {
    margin: 0,
    padding: 0,
    fontFamily: 'Montserrat, serif'
});



