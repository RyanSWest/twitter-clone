 
    // <div className="feed">

    //     {newPosts.length? (<> {newPosts.length}</>) : (<h1>{posts.length}</h1>)}
    //   <div className="feed__header">
    //     <h2>Home</h2>
    //   </div>

    //   <input
    //     className="widgets__search"
    //     placeholder="Search Twitter"
    //     type="text"
    //     name="searchItem"
    //     value={searchItem}
    //     onChange={(e) => setSearchItem(e.target.value)}
    //   />
    //   <button onClick={() => searcher(searchItem)}>Search</button>

    //   {posts.map((p) => (
    //     <>
    //       {" "}
    //       <img src={p.data.image} />
    //       <p>{p.data.displayName}</p>
    //       <p>{p.data.text}</p>{" "}
    //     </>
    //   ))}
    //   <div className="post__body">
    //     <div className="post__header"></div>
    //     <TweetBox />
    //     <FlipMove>
    //       {posts.map((post) => (
    //         <Post
    //           key={post.id}
    //           id={post.id}
    //           displayName={post.data.displayName}
    //           username={post.data.username}
    //           text={post.data.text}
    //           avatar={post.data.avatar}
    //           image={post.data.image}
    //           verified={post.data.verified}
    //           replying={post.data.replying}
    //           likes={post.data.likes}
    //         />
    //       ))}
    //     </FlipMove>
    //   </div>
    // </div>