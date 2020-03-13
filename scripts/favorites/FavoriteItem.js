export const FavoriteItem = favorite => `
    <section class="favoriteItem">
        <header class="favoriteItem_header">
            <h2>${favorite.title}</h2>
        </header>
        <p>
            <img class="favoriteItem_image" src="${favorite.url}" />
        </p>
        <p class="favoriteItem_date">Date: ${new Date(favorite.timestamp).toLocaleDateString('en-US')}</p>
    </section>
`