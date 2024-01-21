import React from 'react'

const DummyFile = () => {
    return (
        <>
            <div>
                git init
                git add .
                git commit -m "your message"
                git branch -M main
                git remote add origin https://github.com/beingrohit-exe/dummy-repository.git
                git push -u origin main
            </div>
            <div>
                git add .
                git commit -m "your message"
                git push -u origin branch-name
            </div>
            <div>
                git add . - Means adding all the files
                git commit -m "message" - Adding message to particular commit
                git fetch - Get the changes from origin
                git pull -
            </div>
        </>
    )
}

export default DummyFile