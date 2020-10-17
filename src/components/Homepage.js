import React from 'react'
import styled from 'styled-components'

const HomepageContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    max-width: 100%;
    margin: auto;
    color: #fff;

    .hero {
        background: url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
        background-attachment: fixed;
        background-size: cover;
        padding: 4%;
        width: 100%;
        height: 40vh;
        text-align: center;
        text-shadow: 1px 1px 20px #000;
    }

    .info, .info2 {
        background-color: #2E2E3A;
        max-width: 100%;
        height: 40vh;
        padding: 2%;
        text-shadow: 1px 1px 20px #000;
    }

    .info2 {
        background: url('https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
        background-attachment: fixed;
        background-size: cover;
    }
`;

export default function Homepage(props) {
    return(
        <HomepageContainer>
            <div className="hero">
                <h2>Take your workouts to the next level</h2>
                <p>
                    THESE DAYS, FITNESS CLASSES CAN BE HELD ANYWHERE-
                    A PARK, AN UNFINISHED BASEMENT OR A GARAGE- NOT 
                    JUST AT A TRADITIONAL GYM. CERTIFIED FITNESS INSTRUCTORS
                    NEED AN EASY WAY TO TAKE THE AWKWARDNESS OUT OF ATTENDANCE
                    TAKING AND CLIENT PAYMENT PROCESSING.
                </p>
            </div>
            <div className="info">
                <h2>Learn More</h2>
                <p>
                    Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                    magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.
                    Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor.
                    Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.
                    Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                    magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.
                </p>
                <p>
                    Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor.
                    Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.
                    Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                    magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.
                    Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor.
                    Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.
                </p>
                <button>Learn More</button>
            </div>
            <div className="info2">
                <h2>Classes </h2>
                <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.
                Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor.
                 Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.
                 Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.
                Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor.
                 Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.
                 Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna.
                Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor.
                 Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.
                </p>
            </div>
        </HomepageContainer>       
    )
}
