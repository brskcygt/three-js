import { Affix, Button, Stack } from '@mantine/core'
import React from 'react'
import { useCharacterAnimations } from '../contexts/CharacterAnimations'

export const Interface = () => {
  const {animationIndex, animations, setAnimationIndex} = useCharacterAnimations();

  return (
      <Stack>
      {
        animations.map((animation, idx) => (
          <Button key={animation} variant={idx === animationIndex ? "filled" : "light"} onClick={() => setAnimationIndex(idx)}>{animation}</Button>
        ))
      }
      </Stack>
  )
}
