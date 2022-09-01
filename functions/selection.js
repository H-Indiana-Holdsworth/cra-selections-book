import fetch from 'node-fetch';
import { resolve } from 'path';
require('dotenv').config({ path: resolve(__dirname, '../.env.development.local') });

export async function handler(event, context) {
  const resp = await fetch(
    `${process.env.REACT_APP_PROCORE_URL}/rest/v1.1/projects/34230/submittals`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${event.queryStringParameters.token}`,
      },
      body: JSON.stringify({
        submittal: {
          actual_delivery_date: 'YYYY-MM-DD',
          confirmed_delivery_date: 'YYYY-MM-DD',
          cost_code_id: 0,
          custom_textarea_1: 'string',
          custom_textfield_1: 'string',
          description: 'string',
          design_team_review_time: 0,
          distribution_member_ids: [0],
          due_date: 'YYYY-MM-DD',
          internal_review_time: 0,
          issue_date: 'YYYY-MM-DD',
          lead_time: 0,
          location_id: 0,
          number: 'string',
          private: true,
          prostore_file_ids: [42],
          received_date: 'YYYY-MM-DD',
          received_from_id: 0,
          required_on_site_date: 'YYYY-MM-DD',
          responsible_contractor_id: 0,
          revision: 'string',
          scheduled_task_key: 'string',
          scheduled_task_id: 0,
          source_submittal_log_id: 0,
          specification_section_id: 0,
          status_id: 0,
          sub_job_id: 0,
          submit_by: 'YYYY-MM-DD',
          submittal_manager_id: 0,
          submittal_package_id: 0,
          title: 'My first SUBMITTAL, woohoo',
          type: 'string',
        },
      }),
    }
  );
  const data = await resp.json();
  console.log('data', data);
  return data;
}
