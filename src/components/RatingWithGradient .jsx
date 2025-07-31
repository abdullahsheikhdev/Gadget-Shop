
import styled from 'styled-components';

const StarRating = ({ rating = 0 }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const fill = rating >= index + 1 ? 'full' : rating > index ? 'half' : 'empty';
    return (
      <svg
        key={index}
        className={`star ${fill}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
      </svg>
    );
  });

  return <StyledWrapper>{stars}</StyledWrapper>;
};

const StyledWrapper = styled.div`
  display: flex;
  gap: 0.3rem;

  .star {
    width: 2rem;
    height: 2rem;
    fill: transparent;
    stroke: #666;
    stroke-linejoin: bevel;
    transition: fill 0.3s ease;
  }

  .star.full {
    fill: #ffc73a;
    stroke: #ffc73a;
  }

  .star.half {
    fill: url(#halfGradient);
    stroke: #ffc73a;
  }

  .star.empty {
    stroke: #ccc;
  }
`;

// Include linear gradient definition once globally for half stars
const HalfStarGradient = () => (
  <svg width="0" height="0">
    <defs>
      <linearGradient id="halfGradient">
        <stop offset="50%" stopColor="#ffc73a" />
        <stop offset="50%" stopColor="transparent" />
      </linearGradient>
    </defs>
  </svg>
);

export const RatingWithGradient = ({ rating }) => (
  <>
    <HalfStarGradient />
    <StarRating rating={rating} />
  </>
);
