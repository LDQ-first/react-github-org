import styled from 'styled-components'
import {indigo} from 'material-ui/colors'
const snackbarIndigo = indigo[500]

const maskUrl = process.env.NODE_ENV === 'production' 
    ? '/react-github-org/dist/static/img/mask.svg'
    : '../../static/img/mask.svg'


const GithubItemDiv = styled.div`
    padding: 1rem 3rem;
    @media (max-width: 1000px) {
         padding: 1rem 2.2rem;
    }
    @media (max-width: 450px) {
         padding: 1rem;
    }
    .title {
        text-align: center;
    }
    .searchArea {
        display: flex;
        align-items: center;
        .search-input {
            flex: 1;
        }
        .search-icon {
            display: flex;
            align-items: center;
            cursor: pointer;
        }
    }
    .githubUrl {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: 1em;
        cursor: pointer;
        text-transform: lowercase;
        .item-icon {
            width: 2em;
            height: 2em;
            color: #007bba;
            margin-right: 2em;
        }
    }
    .header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .name {
            width: 100%;
            height: auto;
        }
        .intro {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            margin-top: 1em;
            @media (max-width: 600px) {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;                
            }
            .bio {
                width: 234px;
                margin-right: 1em;
                word-break: break-all;    
                position: relative;
                @media (max-width: 600px) {
                    margin-right: 0;
                }
                .lazyImgWrapper {
                    overflow: hidden;
                }
                .avatarWrapper {
                   margin-bottom: 1em;
                   
                }
                .avatar {
                    width: 230px;
                    height: 250px;
                    position: relative;
                    left: 2px;
                    top: 1px;
                    z-index: 2;
                    -webkit-mask-box-image: url(${maskUrl});
                }
                .overlay {
                    width: 234px;
                    height: 254px;
                    position: absolute;
                    left: 0;
                    z-index: 3;
                }
            }
            .list {
                flex: 1;
                @media (max-width: 600px) {
                    width: 100%;
                    margin-top: 2em;
                }
                .list-item {
                    padding: 0;
                    .item-icon {
                        transform: scale(0.8);
                        background: transparent;
                    }
                    .item-title {
                        margin-right: 1em;
                    }
                    .item {
                       word-break: break-all;
                       flex: 1;
                    }
                }
            }
        }
        
    }
    .main {
        margin-top: 1em;
        width: 100%;
        .main-header {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .main-header-icon {
                margin-right: 1em;
            }
        }
    }
    .repos {
        width: 100%;
        li {
            padding: 0;
        }
        .list-item + .list-item {
            margin-top: 2em;
        }
        .list-item {
            flex-direction: column;
            padding: 2em;
            background: rgba(255, 163, 102, 0.5);
            box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.4);
            border-radius: 1em;
            @media (max-width: 600px) {
                padding: 1.2em;
                border-radius: 0.6em;
            }
            .repo-header {
                width: 100%;
                .repo-name {

                }
                .repo-description {
                    color: #48698a;
                }
            }
            .repo-content {
                 width: 100%;
                .content-list {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    .content-list-item {
                        width: 100%;
                        margin: 1em 0;
                        .content-list-icon {
                            margin-right: 1em;
                            width: 24px;
                        }
                        .content-list-main {
                            flex: 1;
                            word-break: break-all;
                            .content-list-title {

                            }
                            .content-list-url {

                            }
                        }
                        .content-list-btn {
                            margin-left: 0.5em;
                        }
                    }
                }
                .content-list-data {
                    background: transparent;
                    span {
                        color: #007bba;
                    }
                }
                .githubUrl {

                }
            }
            .repo-footer {
                 width: 100%;
                 margin-top: 1em;
                .repo-footer-item {
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 50%;
                    min-width: 240px;
                    .footer-icon {
                        margin-right: 1em;
                    }
                    .footer-title {
                        word-break: break-all;
                    }
                }
                
            }
            .snackbar {
                >[aria-describedby='message-id'] {
                    background: ${snackbarIndigo}
                }
                .content + .content {
                    margin-top: 10px;
                }
            }
        }
    }
    
`



const GithubUserDiv = GithubItemDiv.extend`
    
`

const GithubOrgDiv = styled(GithubItemDiv)`
    
`

export {
    GithubUserDiv,
    GithubOrgDiv
}
