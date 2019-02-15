import React, { Component } from "react";
import PropTypes from "prop-types";
import uniqid from "uniqid";

// Components
import {
  CodeBlock,
  CodepenBlock,
  ConstructionZoneBlock,
  H1Block,
  H2Block,
  GridBlock,
  ImageBlock,
  ListBlock,
  NotesBlock,
  SeparatorBlock,
  TextBlock,
  VideoPlayerBlock
} from "../../components-block";

// Constants
import { BLOCK_TYPES } from "../../constants";

class Content extends Component {
  render() {
    const { body } = this.props;
    return (
      <main className="c-content">
        <div className="o-wrapper">
          <SeparatorBlock squares />
          {body.map((s, i) => (
            <section key={uniqid(s.title)} className="c-content_section">
              <H1Block value={s.title} />
              {s.content.map(e => {
                switch (e.type) {
                  case BLOCK_TYPES.CODE:
                    return <CodeBlock key={uniqid(e.content)} {...e} />;
                  case BLOCK_TYPES.CODEPEN:
                    return <CodepenBlock key={uniqid(`${e.user}/${e.user}`)} {...e} />;
                  case BLOCK_TYPES.CONSTRUCTION_ZONE:
                    return <ConstructionZoneBlock key={uniqid(`czb-${i}`)} />;
                  case BLOCK_TYPES.GRID:
                    return <GridBlock key={uniqid(e.rows)} {...e} />;
                  case BLOCK_TYPES.HEADER:
                    return <H2Block key={uniqid(e.value)} {...e} />;
                  case BLOCK_TYPES.IMAGE:
                    return <ImageBlock key={uniqid(e.src)} {...e} />;
                  case BLOCK_TYPES.ORDERED_LIST:
                    return <ListBlock key={uniqid(e.items)} {...e} ordered />;
                  case BLOCK_TYPES.UNORDERED_LIST:
                    return <ListBlock key={uniqid(e.items)} {...e} />;
                  case BLOCK_TYPES.NOTES:
                    return <NotesBlock key={uniqid(e.items)} {...e} />;
                  case BLOCK_TYPES.SEPARATOR:
                    return <SeparatorBlock key={uniqid(`sb-${i}`)} {...e} />;
                  case BLOCK_TYPES.TEXT:
                    return <TextBlock key={uniqid(e.content)} {...e} />;
                  case BLOCK_TYPES.VIDEO:
                    return <VideoPlayerBlock key={uniqid(e.url)} {...e} />;
                  default:
                    return null;
                }
              })}
              {i < body.length - 1 && <SeparatorBlock />}
            </section>
          ))}
          <SeparatorBlock squares />
        </div>
      </main>
    );
  }
}

Content.propTypes = {
  body: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default Content;
