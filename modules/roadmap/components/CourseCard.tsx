import Badge from '@/components/elements/Badge'
import Card from '@/components/elements/Card'
import Tooltip from '@/components/elements/Tooltip'

import { STACKS } from '@/common/constant/stacks'
import { CourseCardProps } from '@/common/types/roadmap'

import useIsMobile from '@/hooks/useIsMobile'

export default function CourseCard(props: CourseCardProps) {
  const { icon, title, linkEnglish, linkIndonesia } = props
  const isMobile = useIsMobile()
  return (
    <Card className="flex justify-between border border-neutral-300 p-4 text-sm text-neutral-700 dark:border-neutral-700 dark:text-neutral-400">
      <div className="flex space-x-2">
        <div className="w-5">{STACKS[icon]}</div>
        <span>{title}</span>
      </div>
      <div id="cta-video" className="flex space-x-2">
        {linkIndonesia && (
          <Tooltip title="Free course!">
            <Badge href={linkIndonesia} target="_blank">
              {isMobile ? 'ID' : 'Indonesia'}
            </Badge>
          </Tooltip>
        )}
        {linkEnglish && (
          <Tooltip title="Free course!">
            <Badge href={linkEnglish} target="_blank">
              {isMobile ? 'EN' : 'English'}
            </Badge>
          </Tooltip>
        )}
      </div>
    </Card>
  )
}
