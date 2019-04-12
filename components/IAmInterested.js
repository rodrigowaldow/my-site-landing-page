import NextLink from './NextLink'
import metadata from '../metadata'

export default () => (
  // <div className="content has-text-dark">
  //   <h1>Interested in working together? Let's talk.</h1>
  //   <p>
  //     Contact me via email for business inquiries, or{' '}
  //     <NextLink href="/socials" className="has-text-link">
  //       say hello via social medias
  //     </NextLink>
  //     .
  //   </p>
  //   <br />
  //   <div className="buttons" style={{ justifyContent: 'center' }}>
  //     <a
  //       href={`mailto:${metadata.email}`}
  //       className="button is-info is-primary">
  //       <i className="e1a-wave_tone1" /> &nbsp; {metadata.email}
  //     </a>
  //     <a href={`mailto:${metadata.emailSecondary}`} className="button is-light">
  //       <i className="e1a-eyes" /> &nbsp; {metadata.emailSecondary}
  //     </a>
  //   </div>
  // </div>

  <div className="container is-narrow">
    <div className="box g-max-width">
      <div className="columns level">
        <div className="column level-item">
          <h1 className="title">Start a project</h1>
        </div>
        <div className="column level-item">
          <p>Interested in working together? We should queue up a chat. I’ll buy the coffee.</p>
        </div>
        <div className="column level-item"><a className="button is-info is-medium" href="/contact">Let's do this</a></div>
      </div>
    </div>
  </div>
)
