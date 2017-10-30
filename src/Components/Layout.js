import React, {Component} from 'react';
// IMPORT NavLink <<<<<<<<<<<<<<<
import {NavLink} from 'react-router-dom';
import foxy from '../images/foxy2.jpg'

export default class BaseLayout extends Component {
  render()
  {
  return (
<div>
  {/* <nav class="navbar navbar-default">
    <img src={foxy} style={{width: 200, height: 200}} alt = "cute fox logo!" className="logo"/>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

  <ul class="nav navbar-nav">
      <li class="active"><a href="/">Home <span class="sr-only">(current)</span></a></li>
      <li class="dropdown">
        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Work Samples <span class="caret"></span></a>
        <ul class="dropdown-menu">
          <li><a href="/codesamples">Code</a></li>
          <li><a href="/marketingwork">Marketing</a></li>
          <li><a href="/experimentalwork"work>Experimental</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#">Separated link</a></li>
          <li role="separator" class="divider"></li>
          <li><a href="#">One more separated link</a></li>
        </ul>
      </li>
    </ul>
      <div className="navbar-header">
        <ul className="dropdown-menu">
          <li>
            <NavLink activeClassName="selected" exact to="/">ohhi</NavLink>
          </li>
          <li>
          <NavLink activeClassName="selected" to="/">hi also!</NavLink>
          </li>
          <li>
          <NavLink activeClassName="selected" to="/">hi.as.well.</NavLink>
          </li>
          <li>
          <NavLink activeClassName="selected" to="/">oh hi from me too!</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav> */}

  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <img src={foxy} style={{width: 75, height: 75}} alt = "cute fox logo!" className="logo"/>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li class="dropdown">
        <a class="dropdown-toggle" data-toggle="dropdown" href="#">Portfolio
        <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Page 1-1</a></li>
            <li><a href="#">Page 1-2</a></li>
            <li><a href="#">Page 1-3</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">Marketing
              <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="#">Page 1-1</a></li>
                  <li><a href="#">Page 1-2</a></li>
                  <li><a href="#">Page 1-3</a></li>
                    </ul>
                  </li>
                  <li><a href="https://medium.com/@Foxygen_Prime">Blog</a></li>

                  <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">Experimental
                    <span class="caret"></span></a>
                      <ul class="dropdown-menu">
                        <li><a href="#">Page 1-1</a></li>
                        <li><a href="#">Page 1-2</a></li>
                        <li><a href="#">Page 1-3</a></li>
                          </ul>
                        </li>



      <li><a href="#">Experimental</a></li>

    </ul>
  </div>
</nav>
</div>


  )}
}
