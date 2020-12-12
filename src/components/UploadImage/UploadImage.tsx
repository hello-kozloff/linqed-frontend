import React from 'react';
import {block} from 'bem-cn';
import {Avatar} from "../index";
import {AvatarSize} from "../Avatar/types";
import {IUploadImageProps} from "./types";
import './styles.scss';

/**
 * The component class generator.
 */
const uploadImage = block('upload-image');

/**
 * The upload image component.
 * @constructor
 */
export default function UploadImage(props: IUploadImageProps): React.ReactElement {
  return (
    <div className={uploadImage()}>
      <div className={uploadImage('avatar')}>
        <Avatar
          url={props.url}
          size={AvatarSize.Medium}
        />
      </div>
      <button type="button" className={uploadImage('button')}>
        Изменить фотографию
      </button>
    </div>
  );
}