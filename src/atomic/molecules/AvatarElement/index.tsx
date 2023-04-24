import React from 'react';
import { SharedElement } from 'react-navigation-shared-element';

import {
  AvatarImage,
  Information,
  Item,
  ItemSeparator,
  NameText,
} from './styles';

import { Character } from '../../../models/Characters';

type AvatarElementProps = {
  item: Character;
};

const AvatarElement: React.FC<AvatarElementProps> = ({ item }: AvatarElementProps) => {
  return (
    <Item>
      <ItemSeparator />
      <SharedElement id={`item.${item.id}.photo`}>
        <AvatarImage
          source={{
            uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
          }}
        />
      </SharedElement>
      <Information>
        <NameText>
          {item.name}
        </NameText>
      </Information>
    </Item>
  );
};

export default AvatarElement;
