import React from 'react'
import './Customcard.css'

export default function Customcard() {
    return (
        <div className="container mb-4" style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2 className="mb-4 display-4">
                Trading Card Game Extravaganza
            </h2>
            <p className="mb-5">
                Get ready to battle, trade, and collect Pokémon cards like never before!
                Our trading card game section is a haven for card enthusiasts. Discover the rarest cards,
                learn strategy tips, and find out about the latest card releases.
                Whether you're a casual collector or a competitive player,
                there's always something exciting happening here.
            </p>
            <div className="row">
                <div className="col">
                    <div className="customCard">
                        <img src="https://images.hdqwalls.com/wallpapers/bthumb/pokemon-8k-5g.jpg" alt="image 1" viewBox="0 0 24 24" />
                        <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" />
                        <div className="card__content">
                            <p className="card__title">Pikachu</p>
                            <p className="card__description">
                                Unleash the power of Pikachu! This electrifying card is a must-have for any Pokémon trainer. With its lightning-fast attacks and adorable charm, Pikachu is your ultimate companion in battles.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="customCard">
                        <img src="https://e0.pxfuel.com/wallpapers/776/996/desktop-wallpaper-shiny-pokemon-cg-artwork-sky-fictional-character-night-space-space-pokemon-thumbnail.jpg" alt="" />
                        <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" viewBox="0 0 24 24" />
                        <div className="card__content">
                            <p className="card__title">Shiny Pokémon</p>
                            <p className="card__description">
                                Gaze upon the mesmerizing beauty of a Shiny Pokémon card. These rare and vibrant creatures are a collector's dream. Capture the brilliance of these special cards and add them to your collection today!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="customCard">
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3e0f7135-7126-45ff-a8e0-645a0e646abd/dejgj5y-2dff6667-2eb8-4917-bfc3-a34bfb5998e7.jpg/v1/fill/w_350,h_250,q_70,strp/starry_sky_by_sylfeanne_dejgj5y-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTE1IiwicGF0aCI6IlwvZlwvM2UwZjcxMzUtNzEyNi00NWZmLWE4ZTAtNjQ1YTBlNjQ2YWJkXC9kZWpnajV5LTJkZmY2NjY3LTJlYjgtNDkxNy1iZmMzLWEzNGJmYjU5OThlNy5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Fm5gfpTe7EpsLvvasVQrwtpGLQKXSIZbgovAOtdFkuw" alt="" viewBox="0 0 24 24" />
                        <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" />
                        <div className="card__content">
                            <p className="card__title">Starry Sky</p>
                            <p className="card__description">
                                Embark on a cosmic journey with the Starry Sky card. Witness the wonder of space-themed Pokémon in all their glory. Collect these celestial cards and reach for the stars in every battle!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="customCard">
                        <img src="https://e1.pxfuel.com/desktop-wallpaper/257/701/desktop-wallpaper-pokemon-zekrom-zekrom-thumbnail.jpg" alt="" viewBox="0 0 24 24" />
                        <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" />
                        <div className="card__content">
                            <p className="card__title">Zekrom</p>
                            <p className="card__description">
                                Unleash the power of Zekrom! This mighty Legendary Pokémon card is a force to be reckoned with. Harness its thunderous might and conquer your opponents with this legendary card!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="customCard">
                        <img src="https://e0.pxfuel.com/wallpapers/716/47/desktop-wallpaper-here-s-a-sweet-for-all-my-fellow-ghost-lovers-pokemon-ghost-type-pokemon.jpg" alt="" viewBox="0 0 24 24" />
                        <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" />
                        <div className="card__content">
                            <p className="card__title">Team Instinct</p>
                            <p className="card__description">
                                Join the ranks of Team Instinct with this electrifying card. Show your dedication to the cause and lead your team to victory. The road to greatness starts here!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="customCard">
                        <img src="https://c4.wallpaperflare.com/wallpaper/986/198/362/pokemon-pokemon-go-pokemon-go-team-instinct-wallpaper-preview.jpg" alt="" viewBox="0 0 24 24" />
                        <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" />
                        <div className="card__content">
                            <p className="card__title">Rare Shiny Pokémon</p>
                            <p className="card__description">
                                Discover the world of rare shiny Pokémon. Learn about their unique traits, where to find them,
                                and how to add them to your collection.
                                Unleash the power of these mesmerizing creatures in battles and show off your shiny Pokémon pride!
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
}
