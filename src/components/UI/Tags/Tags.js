import React, { useRef, useState } from 'react';
import classes from './Tags.module.css';

export default function Tags() {
  const [tags, setTags] = useState([]);
  const tagsRef = useRef();

  const onClickHandle = () => {
    tagsRef.current.focus();
  };

  const onChangeHandle = () => {
    const currentTag = tagsRef.current.value;
    const currentVal = currentTag.slice(0, currentTag.length - 1);

    if (currentTag.endsWith(',')) {
      if (currentVal && !tags.includes(currentVal)) {
        setTags([...tags, currentVal]);
      }

      tagsRef.current.value = '';
    }
  };

  const onBlurHandle = () => {
    const currentTag = tagsRef.current.value;
    const currentVal = currentTag.replaceAll(',');

    if (currentVal) {
      if (!tags.includes(currentVal)) {
        setTags([...tags, currentVal]);
      }

      tagsRef.current.value = '';
    }
  };

  const onRemoveHandle = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const showTags = () => {
    const colorArr = ['#b983e9', '#68e17f', '#fff977', '#ffeedf', '#f5d22e'];

    return tags.map((tag, index) => {
      const color = colorArr[index % 5];
      const bgColor = { backgroundColor: color };
      return (
        <li
          key={index}
          style={bgColor}
          onClick={() => {
            onRemoveHandle(tag);
          }}
        >
          {tag}
          <i className="fas fa-times" />
        </li>
      );
    });
  };

  return (
    <ul className={classes.tags} onClick={onClickHandle} onBlur={onBlurHandle}>
      {showTags()}
      <input
        type="text"
        ref={tagsRef}
        spellCheck="false"
        onChange={onChangeHandle}
        placeholder="Typing system.."
      />
    </ul>
  );
}
