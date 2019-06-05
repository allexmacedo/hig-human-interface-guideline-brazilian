<template>
    <footer>
        <div class="info">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci enim eligendi recusandae rem, odit vel sequi, voluptatibus cum harum quod dolorem aliquam deserunt iste qui excepturi eum ea perferendis dolorum!</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-3 col-lg-3">
                    <ul>
                        <li>
                            <h3><a href="macos/">macOS</a></h3>
                            <ul>
                                <li><a href="#">App Architecture</a></li>
                                <li><a href="#">User Interaction</a></li>
                                <li><a href="#">System Capabilities</a></li>
                                <li><a href="#">Visual Design</a></li>
                                <li><a href="#">Icons and Images</a></li>
                                <li><a href="#">Windows and Views</a></li>
                                <li><a href="#">Menus</a></li>
                                <li><a href="#">Buttons</a></li>
                                <li><a href="#">Field and Labels</a></li>
                                <li><a href="#">Selectors</a></li>
                                <li><a href="#">Indicators</a></li>
                                <li><a href="#">Touchbar</a></li>
                                <li><a href="#">Extensions</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div class="col-12 col-md-3 col-lg-3">
                    <ul>
                        <li>
                            <h3><a href="ios/">iOS</a></h3>
                            <ul>
                                <li><a href="#">App Architecture</a></li>
                                <li><a href="#">User Interaction</a></li>
                                <li><a href="#">System Capabilities</a></li>
                                <li><a href="#">Visual Design</a></li>
                                <li><a href="#">Icons and Images</a></li>
                                <li><a href="#">Bars</a></li>
                                <li><a href="#">Views</a></li>
                                <li><a href="#">Controls</a></li>
                                <li><a href="#">Extensions</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div class="col-12 col-md-3 col-lg-3">
                    <ul>
                        <li>
                            <h3><a href="tvos/">tvOS</a></h3>
                            <ul>
                                <li><a href="#">Remote and Controllers</a></li>
                                <li><a href="#">App Architecture</a></li>
                                <li><a href="#">User Interaction</a></li>
                                <li><a href="#">System Capabilities</a></li>
                                <li><a href="#">Visual Design</a></li>
                                <li><a href="#">Interface Elements</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div class="col-12 col-md-3 col-lg-3">
                    <ul>
                        <li>
                            <h3><a href="watchos/">watchOS</a></h3>
                            <ul>
                                <li><a href="#">App Architecture</a></li>
                                <li><a href="#">User Interaction</a></li>
                                <li><a href="#">System Capabilities</a></li>
                                <li><a href="#">Visual Design</a></li>
                                <li><a href="#">Icons and Images</a></li>
                                <li><a href="#">Interface Elements</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    footer {
        background: #f2f2f2;
        padding: 0 0 40px 0;
        margin-top: 40px;

        .info {
            background: darken(#f2f2f2, 1.5%);
            margin-bottom: 40px;
            padding: 30px 0;

            p {
                margin:0px;
                padding:0px;
            }
        }

        ul {
            padding:0px;
            margin:0px;
            list-style: none;

            h3 {
                padding:0px;
                margin:0px;
                a {
                    font-size: 14px;
                    font-weight: bold;
                    color: #333;

                }
            }
            li {
                a {
                    color: #555;
                    font-size: 13px;

                    &:hover {
                        color: #333;
                    }
                }
            }
        }
    }
</style>