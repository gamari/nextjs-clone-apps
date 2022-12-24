# Skills

できること。

## MUI

- [Paper](https://mui.com/material-ui/api/paper/)
  - カードみたいなコンポーネント。
- [Stack](https://mui.com/material-ui/react-stack/#main-content)
  - アイテムを並べるためのコンポーネント。
- [IconButton]
  - アイコン付きのボタン？
- [Tabs]
- [Grid] グリッドを扱える
  - 12カラム用意されている

### Grid

Sample

```JSX
<Grid container rowSpacing={3} columnSpacing={3}>
  {cards.map((location) => (
    <Grid key={location.id} item xs={12} sm={4} md={4} lg={3}>
      <CarouselCard location={location} />
    </Grid>
  ))}
</Grid>
```


### テクニック

- Desktop=Mobileの表示切り替え

```jsx
<Box sx={{ display: { xs: 'none', md: 'block' } }}>
  <ProfileSettings />
</Box>

<Box sx={{ display: { xs: "flex", md: "none" } }}>
  <MobileSearch />
</Box>
```

## Airbnb

- [ ] 