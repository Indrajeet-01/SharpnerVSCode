const posts = [];

async function createPost(post) {
    posts.push(post);
    const error = false;

    if (!error) {
        return;
    } else {
        throw new Error('Error: Something went wrong');
    }
}

async function deletePost(index) {
    if (index >= 0 && index < posts.length) {
        posts.splice(index, 1);
    } else {
        throw new Error('Error: Invalid index');
    }
}

async function displayPosts() {
    let output = '';
    posts.forEach((post, index) => {
        output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
}

// Example usage:

(async () => {
    try {
        await createPost({ title: 'Post 1' });
        await createPost({ title: 'Post 2' });
        await createPost({ title: 'Post 3' });
        await createPost({ title: 'Post 4' });

        console.log('Posts after creation:');
        await displayPosts();

        await deletePost(1);

        console.log('Posts after deletion:');
        await displayPosts();
        await createPost({ title: 'Post 5'})
        await displayPosts()
    } catch (error) {
        console.error(error.message);
    }
})();