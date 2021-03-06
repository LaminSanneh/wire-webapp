/*
 * Wire
 * Copyright (C) 2017 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

import {ArrowIcon} from '@wireapp/react-ui-kit/Icon';
import {COLOR} from '@wireapp/react-ui-kit/Identity';
import {Container, ContainerXS, Columns, Column} from '@wireapp/react-ui-kit/Layout';
import {createPersonalAccountStrings} from '../../strings';
import {H1, Link} from '@wireapp/react-ui-kit/Text';
import {injectIntl} from 'react-intl';
import {Link as RRLink} from 'react-router-dom';
import {withRouter} from 'react-router';
import React from 'react';
import ROUTE from '../route';
import AccountForm from '../component/AccountForm';

function CreatePersonalAccount({history, intl: {formatMessage: _}}) {
  return (
    <Container centerText verticalCenter style={{width: '100%'}}>
      <Columns>
        <Column style={{display: 'flex'}}>
          <div style={{margin: 'auto'}}>
            <Link to={ROUTE.INDEX} data-uie-name="go-index" component={RRLink}>
              <ArrowIcon direction="left" color={COLOR.GRAY} />
            </Link>
          </div>
        </Column>
        <Column style={{flexBasis: 384, flexGrow: 0, padding: 0}}>
          <ContainerXS
            centerText
            style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 428}}
          >
            <H1 center>{_(createPersonalAccountStrings.headLine)}</H1>
            <AccountForm
              onSubmit={() => history.push(ROUTE.VERIFY)}
              submitText={_(createPersonalAccountStrings.submitButton)}
            />
          </ContainerXS>
        </Column>
        <Column />
      </Columns>
    </Container>
  );
}

export default withRouter(injectIntl(CreatePersonalAccount));
