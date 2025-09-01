import React from 'react'

import { IconStarFilled } from '@tabler/icons-react';

import { Switch } from "@/components/ui/switch"

import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

import {
    RadioGroup,
    RadioGroupItem,
} from "@/components/ui/radio-group"

type Props = {}

function RetaurantFilters({ }: Props) {
    return (
        <div className='hidden font-extrabold text-lg w-[312px] mr-6 lg:block'>
            <h3 className='mb-6'>4 partners</h3>
            <ul className='list-none'>
                <li className='flex items-center mb-4'><span className='inline-block mr-auto'>Nu geopend</span><Switch /></li>
                <li className='flex items-center mb-4'><span className='inline-block mr-auto'>Nieuw</span><Switch /></li>
                <li className='flex items-center mb-4'><span className='inline-block mr-auto'>Gratis bezorging</span><Switch /></li>
                <li className='mb-4'>
                    <h3 className='mb-2'>Minimum bestelbedrag</h3>
                    <RadioGroup defaultValue="comfortable">
                        <div className="flex items-center gap-3 mb-1">
                            <RadioGroupItem value="default" id="r1" />
                            <Label htmlFor="r1">Toon alles (126)</Label>
                        </div>
                        <div className="flex items-center gap-3 mb-1">
                            <RadioGroupItem value="comfortable" id="r2" />
                            <Label htmlFor="r2">€ 10,00 of minder (49)</Label>
                        </div>
                        <div className="flex items-center gap-3">
                            <RadioGroupItem value="compact" id="r3" />
                            <Label htmlFor="r3">€ 15,00 of minder (75)</Label>
                        </div>
                    </RadioGroup>
                </li>
                <li className='mb-4'>
                    <h3 className='mb-1'>Beoordeling</h3>
                    <ul className='flex gap-1'>
                        <li><IconStarFilled stroke={2} size={20} /></li>
                        <li><IconStarFilled stroke={2} size={20} /></li>
                        <li><IconStarFilled stroke={2} size={20} /></li>
                        <li><IconStarFilled stroke={2} size={20} /></li>
                        <li><IconStarFilled stroke={2} size={20} /></li>
                    </ul>
                </li>
                <li className='mb-4'>
                    <h3 className='mb-2'>Aanbiedingen en acties</h3>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 mb-0.5">
                            <Checkbox id="terms" />
                            <Label htmlFor="terms">Aanbiedingen (11)</Label>
                        </div>
                        <div className="flex items-center gap-3">
                            <Checkbox id="toggle" />
                            <Label htmlFor="toggle">Stempelkaarten (22)</Label>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default RetaurantFilters