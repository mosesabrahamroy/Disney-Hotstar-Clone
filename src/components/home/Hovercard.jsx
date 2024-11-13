// import { Box, Button, CardMedia, Typography } from '@mui/material';
// import { withStyles } from '@mui/styles';
// import { PlayArrowIcon } from '@mui/icons-material';
// import { MoviesPagesStyle } from '../../User Pages/HomePage/Movies/MoviesPages.Style';

// const HoverCardPage = ({ classes, Image, ReleaseDate, Genre, Overview, NavigateToMediaPlayer }) => {
//   return (
//     <Box className="hoverCard">
//       <Box className={classes.hoverImageBox}>
//         <CardMedia
//           component="img"
//           className={classes.hoverImg}
//           src={Image}
//         />
//       </Box>
//       <Box className={classes.hoverShadow}></Box>
//       <Box className={classes.hoverbtnWrapper}>
//         <Button
//           className={classes.hoverWatchBtn}
//           onClick={NavigateToMediaPlayer}
//         >
//           <PlayArrowIcon className={classes.hoverIcon} />
//           Watch Now
//         </Button>
//       </Box>
//       <Typography className={classes.hoverMovieDetails}>
//         {ReleaseDate ? ReleaseDate.slice(0, 4) : null} • 2h 4m • Hindi • U/A 13+ • {Genre}
//       </Typography>
//       <Typography className={classes.hoverOverView}>
//         {Overview}
//       </Typography>
//     </Box>
//   );
// };

// export default withStyles(MoviesPagesStyle)(HoverCardPage);