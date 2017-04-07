import React from 'react'
import Link from 'next/link'
export default () => (
  <div className="top-bar">
        <div className="top-bar-left">
            <ul className="menu">
              <li className ="menu-text">
                  <Link href='/b' as='/a'><a>a</a></Link>
              </li>
              <li className ="menu-text">
                <Link href='/a' as='/b'><a>b</a></Link>
              </li>
              <li className ="menu-text">
                <Link href='/dashboard'><a>dashboard</a></Link>
              </li>
            </ul>
        </div>
  </div>
)
