import React from 'react'

export default function Home() {

    return (
        <>            
            <section id="pricing" class="bg-light mt-5">
                <div class="container-lg">
                    <div class="text-center">
                        <h2>backto.tech study group</h2>
                        <p class="lead text-muted">This is a React demo app</p>
                    </div>

                    <div class="row my-5 g-0 align-items-center justify-content-center">
                        <div class="col-8 col-lg-4 col-xl-3">
                            <div class="card border-0">
                                <div class="card-body text-center py-4">
                                    <h4 class="card-title">About</h4>
                                    <p class="lead card-subtitle">A little more info</p>
                                    <p class="display-5 my-4 text-primary fw-bold">About</p>
                                    <p class="card-text mx-5 text-muted d-none d-lg-block">Showcase routing. More info about this React app.</p>
                                    <a class="btn btn-primary btn-lg mt-3" href="/#/about">
                                        Go to
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="col-9 col-lg-4">
                            <div class="card border-primary border-2">
                                <div class="card-header text-center text-primary">Popular</div>
                                <div class="card-body text-center py-5">
                                    <h4 class="card-title">Dad Jokes</h4>
                                    <p class="lead card-subtitle">Short predictable jokes, puns, one-liners tipically told by dads</p>
                                    <p class="display-4 my-4 text-primary fw-bold">Dad Jokes</p>
                                    <p class="card-text mx-5 text-muted d-none d-lg-block">
                                        Showcase the functionality of hooks, useState, useEffect, API
                                    </p>
                                    <a class="btn btn-primary btn-lg mt-3" href="/#/jokes">
                                        Go to
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="col-8 col-lg-4 col-xl-3">
                            <div class="card border-0">
                                <div class="card-body text-center py-4">
                                    <h4 class="card-title">Operations</h4>
                                    <p class="lead card-subtitle">Adding </p>
                                    <p class="display-5 my-4 text-primary fw-bold">Operations</p>
                                    <p class="card-text mx-5 text-muted d-none d-lg-block">
                                        Showcase the functionality of hooks and useState
                                    </p>
                                    <a class="btn btn-primary btn-lg mt-3" href="/#/operations">
                                        Go to
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </section>
                        
        </>
    )
}
